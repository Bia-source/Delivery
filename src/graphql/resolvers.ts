import { FindAllAvailableUseCase } from "../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindByStatusUseCase } from "../modules/deliveries/useCases/findByStatus/FindByStatusUseCase";
import { FindAllProductsUseCase } from "../modules/products/useCases/findAllProducts/FindAllProductsUseCase";

const findAllProducts = new FindAllProductsUseCase();
const findAllAvailableUseCase = new FindAllAvailableUseCase();
const findByStatusUseCase = new FindByStatusUseCase();

export const resolvers = {
    Query: {
        products: async () => await findAllProducts.execute(),
        deliveries: async (_, args) =>  await findAllAvailableUseCase.execute(args.id_user),
        getDeliveryStatus: async (_, args) => await findByStatusUseCase.execute(args.status),

    }
}