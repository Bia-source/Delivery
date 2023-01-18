import { client } from "../../modules/clients/routes";
import { CreateClientUseCase } from "../../modules/clients/useCases/createClient/CreateClientUseCase"

describe("Criar novo usuario", () => {
    test("Espera-se conseguir criar um novo usuario", async () => {
       const createUserUseCase = new CreateClientUseCase();
        let newUser = {
            username: ``,
            password: `teste${Math.random()}`,
            email: "bia_ferre32irads@yahoo.com",
            adm: false
        };
        const result = await createUserUseCase.execute(newUser);
        expect(result).toHaveProperty('id');
        expect(result).not.toThrow(new Error('Cliente já existe'));
        expect(result).not.toThrow(new Error('Fails validation!'));
    });
});