import { Router } from "express";
import { ensureAuthenticateClient } from "../../middleawares/ensureAuthenticateClient";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";

const delivery = Router();
const createDelivery = new CreateDeliveryController();

delivery.post("/", ensureAuthenticateClient,createDelivery.handle);

export { delivery }