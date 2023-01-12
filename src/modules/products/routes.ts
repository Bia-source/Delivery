import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateProductController } from "./useCases/createProduct/CreateProductController";
import { DeleteProductController } from "./useCases/deleteProduct/DeleteProductController";
import { FindAllProductsController } from "./useCases/findAllProducts/FindAllProductsController";
import { FindByIdProductController } from "./useCases/findByIdProduct/FindByIdProductController";
import { UpdateProductController } from "./useCases/updateProduct/UpdateProductController";

const product = Router();

const createProductController = new CreateProductController();
const findAllProductsController = new FindAllProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const findByIdController = new FindByIdProductController();

product.post("/", ensureAuthenticateUser ,createProductController.handle);
product.get("/", findAllProductsController.handle);
product.get("/findById", findByIdController.handle);
product.put("/",ensureAuthenticateUser, updateProductController.handle);
product.delete("/",ensureAuthenticateUser, deleteProductController.handle);

export {product}