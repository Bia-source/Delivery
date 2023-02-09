import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";
import { DeleteDeliveryController } from "./useCases/deleteDelivery/DeleteDeliveryController";
import { FindAllAvailableController } from "./useCases/findAllAvailable/FindAllAvailableController";
import { FindByCreatedController } from "./useCases/findByCreated/FindByCreatedController";
import { FindDeliveryByIdClientController } from "./useCases/findByIdClient/FindDeliveryByIdClientController";
import { FindDeliveryByIdController } from "./useCases/findByIdDelivery/FindByIdDeliveryController";
import { FindByIdDeliverymanController } from "./useCases/findByIdDeliveryman/FindByIdDeliverymanController";
import { FindByStatusController } from "./useCases/findByStatus/FindByStatusControlles";
import { UpdateDeliverymanController } from "./useCases/updateDeliveryman/UpdateDeliverymanController";
import { UpdateEndDeliveryController } from "./useCases/updateEnd/UpdateEndDeliveryController";

const delivery = Router();
const createDelivery = new CreateDeliveryController();
const getAllDelivery = new FindAllAvailableController();
const updateDelivery = new UpdateDeliverymanController();
const findDeliveryByIdClient = new FindDeliveryByIdClientController();
const findByDate = new FindByCreatedController();
const findByIdDeliveryman = new FindByIdDeliverymanController();
const endDelivery = new UpdateEndDeliveryController();
const findByStatus = new FindByStatusController();
const deleteDelivery = new DeleteDeliveryController();
const findDeliveryById = new FindDeliveryByIdController();

delivery.post("/", ensureAuthenticateUser, createDelivery.handle);
delivery.get("/", ensureAuthenticateUser, getAllDelivery.handle);
delivery.put("/updateDeliveryman", ensureAuthenticateUser, updateDelivery.handle);
delivery.get("/findOrdersByIdClient", ensureAuthenticateUser, findDeliveryByIdClient.handle);
delivery.get("/finByDate", ensureAuthenticateUser, findByDate.handle);
delivery.get("/finByIdDeliveryman", ensureAuthenticateUser, findByIdDeliveryman.handle);
delivery.put("/updateEnd", ensureAuthenticateUser, endDelivery.handle);
delivery.get("/findByStatus", ensureAuthenticateUser, findByStatus.handle);
delivery.get("/findOrdersById", ensureAuthenticateUser, findDeliveryById.handle);
delivery.delete("/", ensureAuthenticateUser, deleteDelivery.handle);

export { delivery }