import {
    MutationCreateProductArgs,
    MutationDeleteProductArgs,
    MutationUpdateProductAdmArgs,
    QueryGetAllDeliveriesArgs,
    QueryGetDeliveryStatusArgs,
    QueryGetProductByIdArgs,
    QueryGetProductByNameArgs,
    MutationCreateClientArgs,
    MutationDeleteClientArgs,
    MutationUpdateRegisterClientArgs,
    QueryGetClientByIdArgs
} from "../generated/schemas";
import { FindByIdClientUseCase } from './../modules/clients/useCases/findByIdClient/FindByIdClientUseCase';
import { UpdateRegisterClientUseCase } from './../modules/clients/useCases/updateClient/UpdateRegisterClientUseCase';
import { DeleteClientUseCase } from './../modules/clients/useCases/deleteClient/DeleteClientUseCase';
import { CreateClientUseCase } from './../modules/clients/useCases/createClient/CreateClientUseCase';
import { UpdateProductUseCase } from './../modules/products/useCases/updateProduct/UpdateProductUseCase';
import { FindAllAvailableUseCase } from "../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindByStatusUseCase } from "../modules/deliveries/useCases/findByStatus/FindByStatusUseCase";
import { CreateProductUseCase } from "../modules/products/useCases/createProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "../modules/products/useCases/deleteProduct/DeleteProductUseCase";
import { FindAllProductsUseCase } from "../modules/products/useCases/findAllProducts/FindAllProductsUseCase";
import { FindByIdProductUseCase } from "../modules/products/useCases/findByIdProduct/FindByIdProductUseCase";
import { FindProductByNameUseCase } from "../modules/products/useCases/findProductByName/findProductByNameUseCase";
import { instanceProviders } from "../share/providers";

// QUERYS
const findAllProducts = instanceProviders(FindAllProductsUseCase);
const findAllAvailableUseCase = instanceProviders(FindAllAvailableUseCase);
const findByStatusUseCase = instanceProviders(FindByStatusUseCase);
const findProductByIdUseCase = instanceProviders(FindByIdProductUseCase);
const findProductByName = instanceProviders(FindProductByNameUseCase);
const findClientById = instanceProviders(FindByIdClientUseCase);

// MUTATIONS 
const createProductUseCase = instanceProviders(CreateProductUseCase);
const deleteProductUseCase = instanceProviders(DeleteProductUseCase);
const updateProductUseCase = instanceProviders(UpdateProductUseCase);
const createClientUseCase = instanceProviders(CreateClientUseCase);
const deleteClientUseCase = instanceProviders(DeleteClientUseCase);
const updateRegisterClientUseCase = instanceProviders(UpdateRegisterClientUseCase);

export const resolvers = {
    Query: {
        // PRODUCT
        getAllProducts: async () => await findAllProducts.useCase.execute(),
        getProductById: async (_, { id_product }: QueryGetProductByIdArgs) => await findProductByIdUseCase.useCase.execute(id_product),
        getProductByName: async (_, { product_name }: QueryGetProductByNameArgs) => await findProductByName.useCase.execute(product_name),

        // DELIVERY
        getAllDeliveries: async (_, { id_user }: QueryGetAllDeliveriesArgs) => await findAllAvailableUseCase.useCase.execute(id_user),
        getDeliveryStatus: async (_, { status }: QueryGetDeliveryStatusArgs) => await findByStatusUseCase.useCase.execute(status),

        // CLIENT
        getClientById: async (_, {id_client}: QueryGetClientByIdArgs)=> await findClientById.useCase.execute(id_client)
    },
    Mutation: {
        // CLIENT 
        createClient: async (_, { username, password, email, adm, adress }: MutationCreateClientArgs) => {
            return await createClientUseCase.useCase.execute({
                username, password, email, adm, adress
            })
        },
        deleteClient: async (_, {id_client}: MutationDeleteClientArgs) => await deleteClientUseCase.useCase.execute(id_client),
        updateRegisterClient: async (_, {id_client, username, email}: MutationUpdateRegisterClientArgs) => { 
            return await updateRegisterClientUseCase.useCase.execute({
                id_client, updateClient: { username, email}
            })
        },

        // PRODUCT
        createProduct: async (_, {
            product_name,
            product_category,
            quantity_stock,
            discount,
            value,
            status_adm }: MutationCreateProductArgs) => {
            return await createProductUseCase.useCase.execute({
                product_info: { product_name, product_category, quantity_stock, discount, value },
                status_adm
            })
        },
        deleteProduct: async (_, { status_adm, id_product }: MutationDeleteProductArgs) => await deleteProductUseCase.useCase.execute({ status_adm, id_product }),
        updateProductAdm: async (_, {
            status_adm,
            id_product,
            value,
            product_category,
            product_name,
            quantity_stock,
            discount }: MutationUpdateProductAdmArgs) => {
            return await updateProductUseCase.useCase.execute({
                status_adm,
                product_info: {
                    id: id_product,
                    value,
                    product_category,
                    product_name,
                    quantity_stock,
                    discount
                }
            })
        },


    }
}