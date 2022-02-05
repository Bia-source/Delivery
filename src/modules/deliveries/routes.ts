import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./useCases/findAllAvailable/findAllAvailableController";

const delivery = Router();
const createDelivery = new CreateDeliveryController();
const getAllDelivery = new FindAllAvailableController();

delivery.post("/", ensureAuthenticateUser, createDelivery.handle);
delivery.get("/", ensureAuthenticateUser, getAllDelivery.handle);

export { delivery }