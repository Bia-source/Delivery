import { Product } from "../generated/schemas";
import { FindAllAvailableUseCase } from "../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindByStatusUseCase } from "../modules/deliveries/useCases/findByStatus/FindByStatusUseCase";
import { CreateProductUseCase } from "../modules/products/useCases/createProduct/CreateProductUseCase";
import { FindAllProductsUseCase } from "../modules/products/useCases/findAllProducts/FindAllProductsUseCase";
import { FindByIdProductUseCase } from "../modules/products/useCases/findByIdProduct/FindByIdProductUseCase";
import { instanceProviders } from "../share/providers";

const findAllProducts = instanceProviders(FindAllProductsUseCase);
const findAllAvailableUseCase = instanceProviders(FindAllAvailableUseCase);
const findByStatusUseCase = instanceProviders(FindByStatusUseCase);
const createProductUseCase  = instanceProviders(CreateProductUseCase);
const findProductByIdUseCase = instanceProviders(FindByIdProductUseCase);

export const resolvers = {
    Query: {
        getAllProducts: async () => await findAllProducts.useCase.execute(),
        getProductById: async (_, {id_product}) => await findProductByIdUseCase.useCase.execute(id_product),
        getAllDeliveries: async (_, {id_user}) =>  await findAllAvailableUseCase.useCase.execute(id_user),
        getDeliveryStatus: async (_, {status}) => await findByStatusUseCase.useCase.execute(status),
        
    },
    Mutation: {
        createProduct: async (_,{
            product_name,
            product_category,
            quantity_stock,
            discount,
            value}: Product, {status_adm}) => await createProductUseCase.useCase.execute({
                product_info: {product_name,product_category,quantity_stock,discount,value}, 
                status_adm
            }),


    }
}