import { Router } from "express";
import { CreateDeliveryController } from "./useCases/createDelivery/CreateDeliveryController";

const delivery = Router();
const createDelivery = new CreateDeliveryController();

delivery.post("/", createDelivery.handle);

export { delivery }