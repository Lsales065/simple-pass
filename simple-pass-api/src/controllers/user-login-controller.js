import { HttpHelper } from "./helpers";

export class UserLoginController {
    async handle(request, response) {
        const httpHelper = new HttpHelper(response);

        try {
            const { email, password } = request.body;

            if (!Validator.fieldsRequired([email, password])) {
                return httpHelper.badRequest("Dados são obrigatórios.");
            }

            const userRepository = new UserRepository();

            const userExists = await userRepository.findByEmail(email);

            if (!userExists) {
                return httpHelper.badRequest("Dados inválidos.");
            }

            const passwordIsValid = await Hasher.compare(
                password,
                userExists.password,
            );

            if (!passwordIsValid) {
                return httpHelper.badRequest("Dados inválidos.");
            }

            const accessToken = await response.jwtSign(
                { id: userExists.id },
                { expiresIn: "1d" },
            );

            return httpHelper.ok({ accessToken });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}
