import { FindAllAvailableUseCase } from "../modules/deliveries/useCases/findAllAvailable/findAllAvailableUseCase";
import { FindAllProductsUseCase } from "../modules/products/useCases/findAllProducts/FindAllProductsUseCase";

const findAllProducts = new FindAllProductsUseCase();
const findAllAvailableUseCase = new FindAllAvailableUseCase();

export const resolvers = {
    Query: {
        products: async () => findAllProducts.execute(),
        deliveries: async (id: string) => findAllAvailableUseCase.execute(id)
    }
}