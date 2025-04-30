import Fastify from 'fastify'
// import { UserLoginController } from './controllers/user-login-controller'
import { UserRegisterController } from './controllers/user-register-controller.js'
// import { authMiddleware } from './middlewares/auth-middleware.js';
import jwt from '@fastify/jwt'
import cors from '@fastify/cors'

const fastify = Fastify({ logger: true });

fastify.register(jwt, {
    secret: process.env.JWT_SECRET,
});
fastify.register(cors)


fastify.post("/api/user/register", new UserRegisterController().handle);
// fastify.post("/api/user/login", new UserLoginController().handle);

fastify.get('/', async function handler(request, reply) {
    return { hello: 'world' }
})

try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
