import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";
import { FindAllWithoutEndDateController } from "./useCases/findAllWithoutEndDate/findAllWithoutEndDateController";

const delivery = Router();
const createDelivery = new CreateDeliveryController();
const getAllDelivery = new FindAllWithoutEndDateController();

delivery.post("/", ensureAuthenticateUser, createDelivery.handle);
delivery.get("/", ensureAuthenticateUser, getAllDelivery.handle);

export { delivery }