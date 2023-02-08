import { DeleteDeliveryUseCase } from './../modules/deliveries/useCases/deleteDelivery/DeleteDeliveryUseCase';
import { CreateDeliveryUseCase } from './../modules/deliveries/useCases/createDelivery/CreateDeliveryUseCase';
import {
    MutationAuthenticateClientArgs,
    MutationAuthenticateDeliverymanArgs, MutationCreateClientArgs, MutationCreateProductArgs, MutationDeleteClientArgs, MutationDeleteProductArgs,
    MutationUpdateProductAdmArgs, MutationUpdateRegisterClientArgs, QueryGetAllDeliveriesArgs, QueryGetClientByIdArgs, QueryGetDeliveryStatusArgs,
    QueryGetProductByIdArgs,
    QueryGetProductByNameArgs
} from "../generated/schemas";
import { AuthenticateDeliverymanUseCase } from '../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanUseCase';
import { FindAllAvailableUseCase } from "../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindByStatusUseCase } from "../modules/deliveries/useCases/findByStatus/FindByStatusUseCase";
import { UpdateRegisterDeliverymanUseCase } from '../modules/deliveryman/useCases/updateDeliveryman/UpdateRegisterDeliverymanUseCase';
import { CreateProductUseCase } from "../modules/products/useCases/createProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "../modules/products/useCases/deleteProduct/DeleteProductUseCase";
import { FindAllProductsUseCase } from "../modules/products/useCases/findAllProducts/FindAllProductsUseCase";
import { FindByIdProductUseCase } from "../modules/products/useCases/findByIdProduct/FindByIdProductUseCase";
import { FindProductByNameUseCase } from "../modules/products/useCases/findProductByName/findProductByNameUseCase";
import { instanceProviders } from "../share/providers";
import { MutationCreateDeliverymanArgs } from './../generated/schemas';
import { AuthenticateClientUseCase } from './../modules/account/useCases/authenticateClient/AuthenticateClientUseCase';
import { CreateClientUseCase } from './../modules/clients/useCases/createClient/CreateClientUseCase';
import { DeleteClientUseCase } from './../modules/clients/useCases/deleteClient/DeleteClientUseCase';
import { FindByIdClientUseCase } from './../modules/clients/useCases/findByIdClient/FindByIdClientUseCase';
import { UpdateRegisterClientUseCase } from './../modules/clients/useCases/updateClient/UpdateRegisterClientUseCase';
import { CreateDeliverymanUseCase } from './../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanUseCase';
import { UpdateProductUseCase } from './../modules/products/useCases/updateProduct/UpdateProductUseCase';

// QUERYS
const findAllProducts = instanceProviders(FindAllProductsUseCase);
const findAllAvailable = instanceProviders(FindAllAvailableUseCase);
const findByStatus = instanceProviders(FindByStatusUseCase);
const findProductById = instanceProviders(FindByIdProductUseCase);
const findProductByName = instanceProviders(FindProductByNameUseCase);
const findClientById = instanceProviders(FindByIdClientUseCase);

// MUTATIONS 
const createProduct = instanceProviders(CreateProductUseCase);
const deleteProduct = instanceProviders(DeleteProductUseCase);
const updateProduct = instanceProviders(UpdateProductUseCase);
const createClient = instanceProviders(CreateClientUseCase);
const deleteClient = instanceProviders(DeleteClientUseCase);
const updateRegisterClient = instanceProviders(UpdateRegisterClientUseCase);
const authenticateClient = instanceProviders(AuthenticateClientUseCase);
const authenticateDeliveryman = instanceProviders(AuthenticateDeliverymanUseCase);
const createDeliveryman = instanceProviders(CreateDeliverymanUseCase);
const updateRegisterDeliveryman = instanceProviders(UpdateRegisterDeliverymanUseCase);
const createDelivery = instanceProviders(CreateDeliveryUseCase);
const deleteDelivery = instanceProviders(DeleteDeliveryUseCase);

export const resolvers = {
    Query: {
        // PRODUCT
        getAllProducts: async () => await findAllProducts.useCase.execute(),
        getProductById: async (_, { id_product }: QueryGetProductByIdArgs) => await findProductById.useCase.execute(id_product),
        getProductByName: async (_, { product_name }: QueryGetProductByNameArgs) => await findProductByName.useCase.execute(product_name),

        // DELIVERY
        getAllDeliveries: async (_, { id_user }: QueryGetAllDeliveriesArgs) => await findAllAvailable.useCase.execute(id_user),
        getDeliveryStatus: async (_, { status }: QueryGetDeliveryStatusArgs) => await findByStatus.useCase.execute(status),

        // CLIENT
        getClientById: async (_, { id_client }: QueryGetClientByIdArgs) => await findClientById.useCase.execute(id_client)
    },
    Mutation: {
        // CLIENT 
        createClient: async (_, { username, password, email, adm, adress }: MutationCreateClientArgs) => {
            return await createClient.useCase.execute({
                username, password, email, adm, adress
            })
        },
        deleteClient: async (_, { id_client }: MutationDeleteClientArgs) => await deleteClient.useCase.execute(id_client),
        updateRegisterClient: async (_, { id_client, username, email }: MutationUpdateRegisterClientArgs) => {
            return await updateRegisterClient.useCase.execute({
                id_client, updateClient: { username, email }
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
            return await createProduct.useCase.execute({
                product_info: { product_name, product_category, quantity_stock, discount, value },
                status_adm
            })
        },
        deleteProduct: async (_, { status_adm, id_product }: MutationDeleteProductArgs) => await deleteProduct.useCase.execute({ status_adm, id_product }),
        updateProductAdm: async (_, {
            status_adm,
            id_product,
            value,
            product_category,
            product_name,
            quantity_stock,
            discount }: MutationUpdateProductAdmArgs) => {
            return await updateProduct.useCase.execute({
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

        // ACCOUNT
        authenticateClient: async (_, { username, password }: MutationAuthenticateClientArgs) => await authenticateClient.useCase.execute({ username, password }),
        authenticateDeliveryman: async (_, { username, password }: MutationAuthenticateDeliverymanArgs) => await authenticateDeliveryman.useCase.execute({ username, password }),

        // DELIVERYMAN
        createDeliveryman: async (_, { username, password, email }: MutationCreateDeliverymanArgs) => {
            return await createDeliveryman.useCase.execute({
                username, password, email
            })
        },
        updateRegisterDeliveryman: async (_, { id_deliveryman, username, email }) => await updateRegisterDeliveryman.useCase.execute({ id_deliveryman, updateDeliveryman: { username, email } }),

        // DELIVERIES
        createDelivery: async (_, { name, quantity, id_client, username }) => {
            return await createDelivery.useCase.execute({
                item: [{name: name, quantity: quantity}], id_client, username
            });
        },
        deleteDelivery: async (_, { id_delivery, id_client }) => {
           return await deleteDelivery.useCase.execute(id_delivery, id_client)
        }

    }
}