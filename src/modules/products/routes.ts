import { FindDiscountProductsController } from './useCases/findDiscountProduct/findDiscountProductsController';
import { FindByCategoryProductsController } from './useCases/findByCategoryProducts/findByCategoryProductsController';
import { Router } from "express";
import { ensureAuthenticateUser } from "../../middleawares/ensureAuthenticateUser";
import { CreateProductController } from "./useCases/createProduct/CreateProductController";
import { DeleteProductController } from "./useCases/deleteProduct/DeleteProductController";
import { FindAllProductsController } from "./useCases/findAllProducts/FindAllProductsController";
import { FindByIdProductController } from "./useCases/findByIdProduct/FindByIdProductController";
import { FindProductByNameController } from "./useCases/findProductByName/findProductByNameController";
import { UpdateProductController } from "./useCases/updateProduct/UpdateProductController";

const product = Router();

const createProductController = new CreateProductController();
const findAllProductsController = new FindAllProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();
const findByIdController = new FindByIdProductController();
const findProductByNameController = new FindProductByNameController();
const findByCategoryProductsController = new FindByCategoryProductsController();
const findByDiscountAllProductsController = new FindDiscountProductsController();

product.post("/", ensureAuthenticateUser ,createProductController.handle);
product.get("/", findAllProductsController.handle);
product.get("/findById", findByIdController.handle);
product.get("/findByName", findProductByNameController.handle);
product.get("/findByCategory", findByCategoryProductsController.handle);
product.get("/findByDiscountAll", findByDiscountAllProductsController.handleAllProducts);
product.get("/findByDiscountName", findByDiscountAllProductsController.handleNameProductsAll);
product.put("/",ensureAuthenticateUser, updateProductController.handle);
product.delete("/",ensureAuthenticateUser, deleteProductController.handle);

export {product}