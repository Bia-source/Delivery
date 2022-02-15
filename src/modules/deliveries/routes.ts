import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./useCases/updateDeliveryman/UpdateDeliverymanController";

const delivery = Router();
const createDelivery = new CreateDeliveryController();
const getAllDelivery = new FindAllAvailableController();
const updateDelivery = new UpdateDeliverymanController();

delivery.post("/", ensureAuthenticateUser, createDelivery.handle);
delivery.get("/", ensureAuthenticateUser, getAllDelivery.handle);
delivery.put("/updateDeliveryman", ensureAuthenticateUser, updateDelivery.handle);

export { delivery }