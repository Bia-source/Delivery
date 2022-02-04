import { Router } from "express";
import { authenticate } from "./modules/account/routes";
import { client } from "./modules/clients/routes";

const routes = Router();

routes.use("/client",client);
routes.use("/authenticate", authenticate);

export { routes }