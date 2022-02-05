import { Router } from "express";
import { authenticate } from "./modules/account/routes";
import { client } from "./modules/clients/routes";
import { delivery } from "./modules/deliveries/routes";
import { deliveryman } from "./modules/deliveryman/routes";

const routes = Router();

routes.use("/client",client);
routes.use("/authenticate", authenticate);
routes.use("/deliveryman", deliveryman);
routes.use("/delivery", delivery);

export { routes }