import Fastify from 'fastify';
import cors from '@fastify/cors';
import fjwt from '@fastify/jwt';
import fCookie from '@fastify/cookie';

import { prisma } from './database/prisma.js';
import { validEmail } from './utils/valid-email.js';
import { comparePassword, hashPassword } from './utils/crypt-password.js';

const PORT = process.env.PORT;
const SECRET = '13123901293dasdad';
const SECRET_COOKIE = '12300jasjd9ad13132';

const fastify = Fastify({
    logger: true,
});

fastify.register(cors, { origin: '*' });
fastify.register(fjwt, { secret: SECRET });
fastify.register(fCookie, { secret: SECRET_COOKIE, hook: 'preHandler' });

fastify.decorate('authenticate', async (request, response) => {
    const token = request.cookies.access_token;
    if (!token) {
        return response.status(401).send('Unauthorized');
    }
    const payload = request.jwt.verify(token);
    request.userId = payload.userId;
});

fastify.addHook('preHandler', (request, response, next) => {
    request.jwt = fastify.jwt;
    return next();
});

// User
fastify.post('/user/register', async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).send('Email and password are required');
    }
    const userAlreadyExists = await prisma.user.findUnique({ where: { email } });
    if (userAlreadyExists) {
        return response.status(400).send('User already exists.');
    }
    const isEmailValid = validEmail(email);
    if (!isEmailValid) {
        return response.status(400).send('Email invalid.');
    }
    const hashedPassword = await hashPassword(password);
    const userCreated = await prisma.user.create({ data: { email, password: hashedPassword } });

    const accessToken = request.jwt.sign({ userId: userCreated.id });
    response.setCookie('access_token', accessToken, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    });

    return response.status(201).send({ user: { email: userCreated.email } });
});

fastify.post('/user/login', async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        return response.status(400).send('Email and password are required');
    }
    const userExists = await prisma.user.findUnique({ where: { email } });
    if (!userExists) {
        return response.status(400).send('User not exists.');
    }
    const passwordIsValid = await comparePassword(password, userExists.password);
    if (!passwordIsValid) {
        return response.status(400).send('Password invalid');
    }
    const accessToken = request.jwt.sign({ userId: userExists.id });
    response.setCookie('access_token', accessToken, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    });
    return response.status(200).send({ user: { email: userExists.email } });
});

// Card
fastify.get('/user/card', { preHandler: [fastify.authenticate] }, (request, response) => {
    console.log('Caiu aqui');
    return response.status(200).send('Ok');
});

fastify
    .listen({ port: PORT })
    .then(console.log(`Server running in: ${PORT} `))
    .catch(console.error);
