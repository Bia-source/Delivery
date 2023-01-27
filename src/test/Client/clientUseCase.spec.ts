
import { AuthenticateClientUseCase } from "../../modules/account/useCases/authenticateClient/AuthenticateClientUseCase";
import { CreateClientUseCase } from "../../modules/clients/useCases/createClient/CreateClientUseCase"
import { DeleteClientUseCase } from "../../modules/clients/useCases/deleteClient/DeleteClientUseCase";
import { FindByIdClientUseCase } from "../../modules/clients/useCases/findByIdClient/FindByIdClientUseCase";
import { UpdateRegisterClientUseCase } from "../../modules/clients/useCases/updateClient/UpdateRegisterClientUseCase";

let Client = {
    id: "",
    username: "",
    email: ""
};
let TokenUser = "";
let newUserId = "";

beforeAll(async () => {
    const createClientUseCase = new CreateClientUseCase();
    let newUser = {
        username: `teste1`,
        password: `teste1`,
        email: "bia_ferre32irads@yahoo.com",
        adm: false
    };
    const client = await createClientUseCase.execute(newUser);
    Client = client;

    const authenticateClient = new AuthenticateClientUseCase();
    const userLogin = await authenticateClient.execute({ username: "teste1", password: "teste1" });
    TokenUser = userLogin.token;
});

afterAll(async () => {
    const deleteClientUseCase = new DeleteClientUseCase();
    return deleteClientUseCase.execute(newUserId);
})

describe("Criar novo cliente", () => {
    test("Espera-se conseguir criar um novo cliente", async () => {
        const createUserUseCase = new CreateClientUseCase();
        let newUser = {
            username: `testde${Math.random()}`,
            password: `teste${Math.random()}`,
            email: "bia_ferrle32irads@yahoo.com",
            adm: false
        };
        const result = await createUserUseCase.execute(newUser);
        if (result.id) { newUserId = result.id };
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect(result).toHaveProperty("email");
        expect.objectContaining({
            client: {
                id: expect.any(String),
                username: expect.any(String),
                email: expect.any(String)
            }
        });
    });
});

describe("Alterar cliente existente", () => {
    test("Espera-se conseguir atualizar dados cadastrais de um usuario", async () => {
        const updateUseCase = new UpdateRegisterClientUseCase();
        const result = await updateUseCase.execute({
            id_client: Client.id, updateClient: {
                username: "novo nome",
                email: "novo email"
            }
        });
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect(result).toHaveProperty('username', 'novo nome');
    })
});

describe("Buscando dados do cliente", () => {
    test("Espera-se os dados de um cliente", async () => {
        const findClientUseCase = new FindByIdClientUseCase();
        const result = await findClientUseCase.execute(Client.id);
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect(result).toHaveProperty("id");
    })
});

describe("Deletar um cliente", () => {
    test("Espera-se conseguir deletar um cliente", async () => {
        const deleteClientUseCase = new DeleteClientUseCase();
        const findByIdClientUseCase = new FindByIdClientUseCase();

        await deleteClientUseCase.execute(Client.id);
        const result = await findByIdClientUseCase.execute(Client.id);
        expect(result).toBeNull();
        expect(result).not.toBeUndefined();
    });
});