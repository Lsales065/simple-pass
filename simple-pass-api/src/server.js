import Fastify from 'fastify';
import fCors from '@fastify/cors';
import fjwt from '@fastify/jwt';
import fCookie from '@fastify/cookie';

import { prisma } from './database/prisma.js';
import { validEmail } from './utils/valid-email.js';
import { comparePassword, hashPassword } from './utils/crypt-password.js';
import { validCPF } from './utils/valid-cpf.js';

const PORT = process.env.PORT;
const SECRET = process.env.JWT_SECRET;

const fastify = Fastify();

fastify.register(fCors, {
    origin: (_, cb) => {
        cb(null, true);
    },
    credentials: true,
});
fastify.register(fjwt, { secret: SECRET });
fastify.register(fCookie);

fastify.decorate('authenticate', async (request, response) => {
    try {
        const token = request.cookies.token;
        if (!token) return response.status(401).send({ error: 'Token não encontrado' });
        request.headers.authorization = `Bearer ${token}`;
        await request.jwtVerify();
    } catch (error) {
        console.error(error);
        return response.status(401).send({ error: 'Não autorizado' });
    }
});

// User
fastify.post('/user/register', async (request, response) => {
    const { name, cpf, email, password, confirmationPassword } = request.body;
    if (!cpf || !name || !email || !password || !confirmationPassword) {
        return response.status(400).send({ error: 'Todos os campos são obrigatórios.' });
    }
    const userAlreadyExists = await prisma.user.findFirst({
        where: { OR: [{ email }, { cpf }] },
    });
    if (userAlreadyExists) {
        return response.status(400).send({ error: 'E-mail ou CPF já utilizado.' });
    }
    const isEmailValid = validEmail(email);
    if (!isEmailValid) {
        return response.status(400).send({ error: 'E-mail inválido.' });
    }
    const isValidCpf = validCPF(cpf);
    if (!isValidCpf) {
        return response.status(400).send({ error: 'CPF inválido.' });
    }
    if (password !== confirmationPassword) {
        return response.status(400).send({ error: 'As senhas devem ser iguais.' });
    }
    const hashedPassword = await hashPassword(password);
    const userCreated = await prisma.user.create({ data: { cpf, name, email, password: hashedPassword } });

    await prisma.card.create({ data: { userId: userCreated.id } });

    const accessToken = await response.jwtSign({ userId: userCreated.id }, { expiresIn: '1d' });
    response.setCookie('token', accessToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    });

    return response.status(201).send({ user: { name, email } });
});

fastify.post('/user/login', async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).send({ error: 'Todos os campos são obrigatórios.' });
    }
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (!userExists) {
        return response.status(400).send({ error: 'Usuário não existe.' });
    }
    const passwordIsValid = await comparePassword(password, userExists.password);
    if (!passwordIsValid) {
        return response.status(400).send({ error: 'Credenciais inválidas.' });
    }
    const accessToken = await response.jwtSign({ userId: userExists.id }, { expiresIn: '1d' });
    response.setCookie('token', accessToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
    });
    return response.status(200).send({ user: { name: userExists.name, email } });
});

fastify.get('/user/me', { preHandler: [fastify.authenticate] }, async (request, response) => {
    const user = await prisma.user.findUnique({
        where: { id: request.user.userId },
        select: { name: true, email: true },
    });
    return response.status(200).send({ user });
});

fastify.post('/user/logout', async (_, response) => {
    response.clearCookie('token', { path: '/' });
    return response.status(200).send({ message: 'Saindo da aplicação' });
});

// Card
fastify.get('/card', { preHandler: [fastify.authenticate] }, async (request, response) => {
    const userId = request.user.userId;
    const card = await prisma.card.findFirst({ where: { userId } });
    if (!card) {
        return response.status(404).send({ error: 'Cartão não encontrado.' });
    }
    return response.status(200).send({ card });
});

// Pagamento
fastify.post('/payment', { preHandler: [fastify.authenticate] }, async (request, response) => {
    const { paymentMethod, value } = request.body;
    const userId = request.user.userId;
    if (!paymentMethod || !value) {
        return response.status(400).send({ error: 'Todos os dados são obrigatórios.' });
    }
    await Promise.all([
        prisma.payment.create({ data: { userId, value, method: paymentMethod } }),
        prisma.card.update({ where: { userId }, data: { balance: { increment: value } } }),
    ]);
    return response.status(201).send({ error: 'Pagamento realizado com sucesso.' });
});

fastify
    .listen({ port: PORT })
    .then(console.log(`Server running in: ${PORT} `))
    .catch(console.error);
