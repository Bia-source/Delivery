import { FindByCategoryProductsUseCase } from './../modules/products/useCases/findByCategoryProducts/findByCategoryProductsUseCase';
import {
    Clients,
    MutationAuthenticateClientArgs,
    MutationAuthenticateDeliverymanArgs, MutationCreateClientArgs, MutationCreateDeliveryArgs, MutationCreateDeliverymanArgs, MutationCreateProductArgs, MutationDeleteClientArgs, MutationDeleteDeliveryArgs, MutationDeleteProductArgs,
    MutationInsertDeliverymanArgs,
    MutationUpdateProductAdmArgs, MutationUpdateRegisterClientArgs, MutationUpdateRegisterDeliverymanArgs, Product, QueryGetAllDeliveriesArgs, QueryGetClientByIdArgs, QueryGetDeliveryByCreatedArgs, QueryGetDeliveryByIdClientArgs, QueryGetDeliveryStatusArgs,
    QueryGetProductByIdArgs,
    QueryGetProductByNameArgs,
    ReturnAuthenticate,
    ReturnClient,
    ReturnCreateDelivery,
    ReturnDeleteDelivery, ReturnDeliveries, ReturnDeliveryByIdAndDate, ReturnDeliveryman,
    ReturnInsertDeliverymanInOrder,
    ReturnProductsByCategory
} from "../generated/schemas";
import { AuthenticateDeliverymanUseCase } from '../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanUseCase';
import { FindAllAvailableUseCase } from "../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindByIdDeliveryUseCase } from '../modules/deliveries/useCases/findByIdDelivery/FindByIdDeliveryUseCase';
import { FindByStatusUseCase } from "../modules/deliveries/useCases/findByStatus/FindByStatusUseCase";
import { UpdateRegisterDeliverymanUseCase } from '../modules/deliveryman/useCases/updateDeliveryman/UpdateRegisterDeliverymanUseCase';
import { CreateProductUseCase } from "../modules/products/useCases/createProduct/CreateProductUseCase";
import { DeleteProductUseCase } from "../modules/products/useCases/deleteProduct/DeleteProductUseCase";
import { FindAllProductsUseCase } from "../modules/products/useCases/findAllProducts/FindAllProductsUseCase";
import { FindByIdProductUseCase } from "../modules/products/useCases/findByIdProduct/FindByIdProductUseCase";
import { FindProductByNameUseCase } from "../modules/products/useCases/findProductByName/findProductByNameUseCase";
import { instanceProviders } from "../share/providers";
import { MutationDeliveredArgs, QueryGetDeliveryByIdArgs, QueryGetDeliveryByIdDeliverymanArgs, QueryGetProductsByCategoryArgs } from './../generated/schemas';
import { AuthenticateClientUseCase } from './../modules/account/useCases/authenticateClient/AuthenticateClientUseCase';
import { CreateClientUseCase } from './../modules/clients/useCases/createClient/CreateClientUseCase';
import { DeleteClientUseCase } from './../modules/clients/useCases/deleteClient/DeleteClientUseCase';
import { FindByIdClientUseCase } from './../modules/clients/useCases/findByIdClient/FindByIdClientUseCase';
import { UpdateRegisterClientUseCase } from './../modules/clients/useCases/updateClient/UpdateRegisterClientUseCase';
import { CreateDeliveryUseCase } from './../modules/deliveries/useCases/createDelivery/CreateDeliveryUseCase';
import { DeleteDeliveryUseCase } from './../modules/deliveries/useCases/deleteDelivery/DeleteDeliveryUseCase';
import { FindByCreatedUseCase } from './../modules/deliveries/useCases/findByCreated/FindByCreatedUseCase';
import { FindByEndAtUseCase } from './../modules/deliveries/useCases/findByEndAt/FindByEndAtUseCase';
import { FindDeliveryByIdClientUseCase } from './../modules/deliveries/useCases/findByIdClient/FindDeliveryByIdClientUseCase';
import { FindByIdDeliverymanUseCase } from './../modules/deliveries/useCases/findByIdDeliveryman/FindByIdDeliverymanUseCase';
import { UpdateDeliverymanUseCase } from './../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanUseCase';
import { UpdateEndDeliveryUseCase } from './../modules/deliveries/useCases/updateEnd/UpdateEndDeliveryUseCase';
import { CreateDeliverymanUseCase } from './../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanUseCase';
import { UpdateProductUseCase } from './../modules/products/useCases/updateProduct/UpdateProductUseCase';
import { FindDiscountProductsUseCase } from '../modules/products/useCases/findDiscountProduct/findDiscountProductsUseCase';

// QUERYS
const findAllProducts = instanceProviders(FindAllProductsUseCase);
const findAllAvailable = instanceProviders(FindAllAvailableUseCase);
const findByStatus = instanceProviders(FindByStatusUseCase);
const findProductById = instanceProviders(FindByIdProductUseCase);
const findProductByName = instanceProviders(FindProductByNameUseCase);
const findProductsByCategory = instanceProviders(FindByCategoryProductsUseCase);
const findClientById = instanceProviders(FindByIdClientUseCase);
const findDeliveryByCreated = instanceProviders(FindByCreatedUseCase);
const findDeliveryByEndAt = instanceProviders(FindByEndAtUseCase);
const findDeliveryByIdClient = instanceProviders(FindDeliveryByIdClientUseCase);
const findDeliveryById = instanceProviders(FindByIdDeliveryUseCase);
const findDeliveryByIdDeliveryman = instanceProviders(FindByIdDeliverymanUseCase);
const findProductsAllDiscount = instanceProviders(FindDiscountProductsUseCase);

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
const insertDeliverymanInOrder = instanceProviders(UpdateDeliverymanUseCase);
const delivered = instanceProviders(UpdateEndDeliveryUseCase);

export const resolvers = {
    Query: {
        // PRODUCT
        getAllProducts: async (): Promise<[Product]> => await findAllProducts.useCase.execute(),
        getProductById: async (_, { id_product }: QueryGetProductByIdArgs): Promise<Product> => await findProductById.useCase.execute(id_product),
        getProductByName: async (_, { product_name }: QueryGetProductByNameArgs): Promise<Product> => await findProductByName.useCase.execute(product_name),
        getProductsByCategory: async (_, { product_category, sort, nameSort, amountOfResults }: QueryGetProductsByCategoryArgs): Promise<[ReturnProductsByCategory]>=> {
            return await findProductsByCategory.useCase.execute({ product_category, sort, nameSort, amountOfResults });
        },
        getDiscountAllProducts: async (_, { amountOfResults })=> await findProductsAllDiscount.useCase.allProducts(amountOfResults),
        getDiscountNameProductsAll: async (_, { amountOfResults, product_name })=> await findProductsAllDiscount.useCase.productsNameAll(amountOfResults, product_name),

        // DELIVERY
        getAllDeliveries: async (_, { id_user }: QueryGetAllDeliveriesArgs): Promise<[ReturnDeliveries]> => await findAllAvailable.useCase.execute(id_user),
        getDeliveryStatus: async (_, { status }: QueryGetDeliveryStatusArgs): Promise<[ReturnDeliveries]> => await findByStatus.useCase.execute(status),
        getDeliveryByCreated: async (_, { findDateInitial, findDateEnd }: QueryGetDeliveryByCreatedArgs): Promise<[ReturnDeliveryByIdAndDate]> => {
            return await findDeliveryByCreated.useCase.execute(findDateInitial, findDateEnd);
        },
        getDeliveryByEnd: async (_, { findDateInitial, findDateEnd }: QueryGetDeliveryByCreatedArgs): Promise<[ReturnDeliveryByIdAndDate]> => {
            return await findDeliveryByEndAt.useCase.execute(findDateInitial, findDateEnd);
        },
        getDeliveryByIdClient: async (_, { id_client }: QueryGetDeliveryByIdClientArgs): Promise<ReturnDeliveryByIdAndDate> => {
            return await findDeliveryByIdClient.useCase.execute(id_client);
        },
        getDeliveryById: async (_, { id_delivery }: QueryGetDeliveryByIdArgs): Promise<ReturnDeliveryByIdAndDate> => {
            return await findDeliveryById.useCase.execute(id_delivery);
        },
        getDeliveryByIdDeliveryman: async (_, { id_deliveryman }: QueryGetDeliveryByIdDeliverymanArgs): Promise<ReturnDeliveryByIdAndDate> => {
            return await findDeliveryByIdDeliveryman.useCase.execute(id_deliveryman);
        },

        // CLIENT
        getClientById: async (_, { id_client }: QueryGetClientByIdArgs): Promise<Clients> => await findClientById.useCase.execute(id_client)
    },
    Mutation: {
        // CLIENT 
        createClient: async (_, { username, password, email, adm, adress }: MutationCreateClientArgs): Promise<ReturnClient> => {
            return await createClient.useCase.execute({
                username, password, email, adm, adress
            });
        },
        deleteClient: async (_, { id_client }: MutationDeleteClientArgs): Promise<ReturnClient> => await deleteClient.useCase.execute(id_client),
        updateRegisterClient: async (_, { id_client, username, email }: MutationUpdateRegisterClientArgs): Promise<ReturnClient> => {
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
            status_adm }: MutationCreateProductArgs): Promise<Product> => {
            return await createProduct.useCase.execute({
                product_info: { product_name, product_category, quantity_stock, discount, value },
                status_adm
            })
        },
        deleteProduct: async (_, { status_adm, id_product }: MutationDeleteProductArgs): Promise<Product> => await deleteProduct.useCase.execute({ status_adm, id_product }),
        updateProductAdm: async (_, {
            status_adm,
            id_product,
            value,
            product_category,
            product_name,
            quantity_stock,
            discount }: MutationUpdateProductAdmArgs): Promise<Product> => {
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
        authenticateClient: async (_, { username, password }: MutationAuthenticateClientArgs): Promise<ReturnAuthenticate> => await authenticateClient.useCase.execute({ username, password }),
        authenticateDeliveryman: async (_, { username, password }: MutationAuthenticateDeliverymanArgs): Promise<ReturnAuthenticate> => await authenticateDeliveryman.useCase.execute({ username, password }),

        // DELIVERYMAN
        createDeliveryman: async (_, { username, password, email }: MutationCreateDeliverymanArgs): Promise<ReturnDeliveryman> => {
            return await createDeliveryman.useCase.execute({
                username, password, email
            })
        },
        updateRegisterDeliveryman: async (_, { id_deliveryman, username, email }: MutationUpdateRegisterDeliverymanArgs): Promise<ReturnClient> => await updateRegisterDeliveryman.useCase.execute({ id_deliveryman, updateDeliveryman: { username, email } }),

        // DELIVERIES
        createDelivery: async (_, { name, quantity, id_client, username }: MutationCreateDeliveryArgs): Promise<ReturnCreateDelivery> => {
            return await createDelivery.useCase.execute({
                item: [{ name: name, quantity: quantity }], id_client, username
            });
        },
        deleteDelivery: async (_, { id_delivery, id_client }: MutationDeleteDeliveryArgs): Promise<ReturnDeleteDelivery> => {
            return await deleteDelivery.useCase.execute(id_delivery, id_client)
        },
        insertDeliveryman: async (_, { id_delivery, id_deliveryman, username, email }: MutationInsertDeliverymanArgs): Promise<ReturnInsertDeliverymanInOrder> => {
            return await insertDeliverymanInOrder.useCase.execute({ id_delivery, id_deliveryman, username, email });
        },
        delivered: async (_, { id_delivery, id_deliveryman, username, email }: MutationDeliveredArgs): Promise<ReturnInsertDeliverymanInOrder> => {
            return await delivered.useCase.execute({ id_delivery, id_deliveryman, username, email });
        }

    }
}