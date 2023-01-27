import { FindByIdClientUseCase } from "../../modules/clients/useCases/findByIdClient/FindByIdClientUseCase";
import { CreateDeliveryUseCase } from "../../modules/deliveries/useCases/createDelivery/CreateDeliveryUseCase"
import { FindAllAvailableUseCase } from "../../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindByCreatedUseCase } from "../../modules/deliveries/useCases/findByCreated/FindByCreatedUseCase";
import { FindByEndAtUseCase } from "../../modules/deliveries/useCases/findByEndAt/FindByEndAtUseCase";
import { FindByIdDeliveryUseCase } from "../../modules/deliveries/useCases/findByIdDelivery/FindByIdDeliveryUseCase";
import { FindByIdDeliverymanUseCase } from "../../modules/deliveries/useCases/findByIdDeliveryman/FindByIdDeliverymanUseCase";
import { FindByStatusUseCase } from "../../modules/deliveries/useCases/findByStatus/FindByStatusUseCase";
import { UpdateDeliverymanUseCase } from "../../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanUseCase";
import { UpdateEndDeliveryUseCase } from "../../modules/deliveries/useCases/updateEnd/UpdateEndDeliveryUseCase";

let Client = {
    id: "1fc6481e-28ac-426f-8f30-da8fbbec6d4c",
    username: "testeDelivery",
    email: "bia_ferre32irads@yahoo.com"
};
let Deliveryman = {
   id: "5d4289c9-b622-4a75-8635-93566ad0d32c"
}

let DeliveryInfo = {
    id: "0aa3cbdf-4357-4a19-baf2-1898eb151810"
}

describe("Criar novo delivery", () => {
    test("Espera-se conseguir criar um delivery", async () => {

        const createDeliveryUseCase = new CreateDeliveryUseCase();
        let item_name = [{
            name: "frauda",
            quantity: 7
        }]
        const result = await createDeliveryUseCase.execute({
            item: item_name,
            id_client: Client.id,
            username: Client.username
        });
        DeliveryInfo.id = result.order[0].delivery.id;
        expect(result).toHaveProperty('order');
    });
});

describe("Buscando deliveries", () => {
    test("Espera-se receber todos os deliveries em andamento feitos pelo cliente", async () => {
        const findAllAvailableUseCase = new FindAllAvailableUseCase();
        const result = await findAllAvailableUseCase.execute(Client.id);
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
        expect.arrayContaining(expect.objectContaining({
            userInfo: {
                id_client: expect.any(String),
                username: expect.any(String)
            },
            deliveryInfo: {
                id: expect.any(String),
                itens: expect.any(String),
                id_deliveryman: expect.any(String),
                created_at: expect.any(Date),
                end_at: expect.any(Date),
                status: expect.any(String)
            }
        }));
    });

    test("Espera-se receber todos deliveries criados entre duas datas", async () => {
        const findByDate = new FindByCreatedUseCase();
        const dateInitial = "2023-01-01";
        const dateEnd = "2023-01-27";
        await findByDate.execute(dateInitial, dateEnd);
        expect.arrayContaining(expect.objectContaining({
            id: expect.any(String),
            id_client: expect.any(String),
            id_deliveryman: expect.any(String),
            created_at: expect.any(Date),
            end_at: expect.any(Date),
            status: expect.any(String)
        }));
    });

    test("Espera-se receber todos os deliveries entregues entre duas datas", async ()=> {
        const findByEndAtUseCase = new FindByEndAtUseCase();
        const dateInitial = "2023-01-01";
        const dateEnd = "2023-01-27";
        await findByEndAtUseCase.execute(dateInitial, dateEnd);
        expect.arrayContaining(expect.objectContaining({
            id: expect.any(String),
            id_client: expect.any(String),
            id_deliveryman: expect.any(String),
            created_at: expect.any(Date),
            end_at: expect.any(Date),
            status: expect.any(String)
        }));
    });

    test("Espera-se receber todos os deliveries feitos por um cliente", async ()=>{
       const findByIdClientUseCase = new FindByIdClientUseCase();
       await findByIdClientUseCase.execute(Client.id);
       expect.arrayContaining(expect.objectContaining({
        id: expect.any(String),
        id_client: expect.any(String),
        id_deliveryman: expect.any(String),
        created_at: expect.any(Date),
        end_at: expect.any(Date),
        status: expect.any(String)
    }));
    });

    test("Espera-se receber todos os deliveries entregues por um deliveryman", async()=> {
        const findByIdDeliverymanUseCase = new FindByIdDeliverymanUseCase();
        await findByIdDeliverymanUseCase.execute(Deliveryman.id);
        expect.arrayContaining(expect.objectContaining({
            id: expect.any(String),
            id_client: expect.any(String),
            id_deliveryman: expect.any(String),
            created_at: expect.any(Date),
            end_at: expect.any(Date),
            status: expect.any(String)
        }));
    });

    test("Espera-se receber informações de um delivery especifico", async()=>{
      const findByIdDeliveryUseCase = new FindByIdDeliveryUseCase();
      await findByIdDeliveryUseCase.execute(DeliveryInfo.id);
      expect.objectContaining({
        item_name: {
            id: expect.any(String),
            id_product: expect.any(String),
            id_delivery: expect.any(String),
            quantity: expect.any(Number),
        },
        id_client: expect.any(String),
        deliveryman: expect.any(String),
        created_at: expect.any(Date),
        end_at: expect.any(Date),
        status: expect.any(String)
    })
    });

    // test("Espera-se receber todos os deliveries com o mesmo status", async ()=> {
    //    const findByStatusUseCase = new FindByStatusUseCase();
    //    const result = await findByStatusUseCase.execute("AGUARDANDO");
    //    console.log(result) 
    // });
});

describe("Alterar status do delivery", ()=> {
    test("Espera-se conseguir alterar status do delivery", async()=> {
        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
        await updateDeliverymanUseCase.execute({id_delivery: DeliveryInfo.id, id_deliveryman:Deliveryman.id, username:Client.username,email:Client.email});
        expect.objectContaining({
            user: expect.any(String),
            data: {
                id: expect.any(String),
                id_client: expect.any(String),
                id_deliveryman: expect.any(String),
                created_at: expect.any(Date),
                end_at: expect.any(Date),
                status: expect.any(String)
            }      
        });
    });
});

describe("Definir entrega de delivery", ()=> {
    test("Espera-se alterar status para ENTREGUE", async()=> {
        const updateEndDeliverymanUseCase = new UpdateEndDeliveryUseCase();
        await updateEndDeliverymanUseCase.execute({id_delivery: DeliveryInfo.id, id_deliveryman:Deliveryman.id, username:Client.username,email:Client.email});
        expect.objectContaining({
            user: expect.any(String),
            data: {
                id: expect.any(String),
                id_client: expect.any(String),
                id_deliveryman: expect.any(String),
                created_at: expect.any(Date),
                end_at: expect.any(Date),
                status: expect.any(String)
            }      
        });
    });
});