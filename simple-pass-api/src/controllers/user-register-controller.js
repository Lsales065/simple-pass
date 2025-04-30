import { HttpHelper } from "../helpers/helpers.js";

export class UserRegisterController {
    async handle(request, response) {
        const httpHelper = new HttpHelper(response);

        try {
            const { cpf, email, password } = request.body;

            // if (!Validator.fieldsRequired([email, password, confirmationPassword])) {
            //     return httpHelper.badRequest("Dados são obrigatórios");
            // }

            // if (!Validator.emailIsValid(email)) {
            //     return httpHelper.badRequest("E-mail inválido");
            // }

            // // const userRepository = new UserRepository();

            // const userAlreadyExists = await userRepository.findByEmail(email);

            // if (userAlreadyExists) {
            //     return httpHelper.badRequest("Usuário já cadastrado.");
            // }

            // const hashedPassword = await Hasher.hash(password);

            // const userCreated = await userRepository.createUser({
            //     email,
            //     password: hashedPassword,
            // });

            const accessToken = await response.jwtSign(
                { id: cpf },
                { expiresIn: "1d" },
            );

            console.log(accessToken);
            return httpHelper.created({ accessToken });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}
