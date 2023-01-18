import { client } from "../../modules/clients/routes";
import { CreateClientUseCase } from "../../modules/clients/useCases/createClient/CreateClientUseCase"

describe("Criar novo usuario", () => {
    test("Espera-se conseguir criar um novo usuario", async () => {
       const createUserUseCase = new CreateClientUseCase();
        let newUser = {
            username: `teste${Math.random()}`,
            password: `teste${Math.random()}`,
            email: "bia_ferre32irads@yahoo.com",
            adm: false
        };
        const result = await createUserUseCase.execute(newUser);
        expect(result).toHaveProperty('id');
        expect(result).not.toHaveProperty('message')
    });
});