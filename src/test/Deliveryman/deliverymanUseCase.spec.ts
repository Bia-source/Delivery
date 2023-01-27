import { CreateDeliverymanUseCase } from "../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanUseCase";
import { UpdateRegisterDeliverymanUseCase } from "../../modules/deliveryman/useCases/updateDeliveryman/UpdateRegisterDeliverymanUseCase";

let deliveryman = {
    id: "83809ac8-cbb9-40af-8be6-c33dc8bf6f99",
    username: "",
    email: ""
}

describe("Cadastrar um novo deliveryman", () => {
    test("Espera-se conseguir criar um novo deliveryman", async () => {
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const result = await createDeliverymanUseCase.execute({
            username: `newDelivery${Math.random()}`,
            password: `newDelivery${Math.random()}`,
            email: `deliveryman@gmail.com`
        });
        deliveryman = result;
        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('username');
    });
});

describe("Alterando registros do deliveryman", () => {
    test("Espera-se conseguir alterar informações do deliveryman", async () => {
        const updateRegisterDeliverymanUseCase = new UpdateRegisterDeliverymanUseCase();
        await updateRegisterDeliverymanUseCase.execute({
            id_deliveryman: deliveryman.id,
            updateDeliveryman: {
                username: `novo nome delivery${Math.random()}`
            }
        });
        expect.objectContaining({
            id: expect.any(String),
            username: expect.any(String),
            email: expect.any(String),
        });
    });
});
