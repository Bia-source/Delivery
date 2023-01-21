import { CreateProductUseCase } from "../../modules/products/useCases/createProduct/CreateProductUseCase"
import { DeleteProductUseCase } from "../../modules/products/useCases/deleteProduct/DeleteProductUseCase";
import { FindAllProductsUseCase } from "../../modules/products/useCases/findAllProducts/FindAllProductsUseCase";
import { FindByIdProductUseCase } from "../../modules/products/useCases/findByIdProduct/FindByIdProductUseCase";
import { FindProductByName } from "../../modules/products/useCases/findProductByName/findProductByNameUseCase";
import { UpdateProductUseCase } from "../../modules/products/useCases/updateProduct/UpdateProductUseCase";

let Product = {
    id: "",
    value: 0,
    product_category: "",
    product_name: "",
    quantity_stock: 0,
    discount: 0
}

describe("Criar um novo produto", () => {
    test("Espera-se conseguir criar um novo produto", async () => {
        const createProductUseCase = new CreateProductUseCase();
        let newProduct = {
            value: 10,
            product_category: "alimento",
            product_name: "bolacha",
            quantity_stock: 10,
            discount: 20
        }
        const result = await createProductUseCase.execute({ product_info: newProduct, status_adm: true });
        Product = result;
        expect(result).toHaveProperty('id');
    });
});

describe("Busca de produtos", () => {
    test("Espera-se uma lista de produtos", async () => {
        const findProductAllUseCase = new FindAllProductsUseCase();
        const result = await findProductAllUseCase.execute();
        expect(result).not.toBeNull()
        expect(result).not.toBeUndefined();
        expect.arrayContaining(expect.objectContaining({
            products: {
                id: expect.any(String),
                product_name: expect.any(String),
                product_category: expect.any(String),
                quantity_stock: expect.any(Number),
                discount: expect.any(Number),
                value: expect.any(Number),
            }
        }));
    });

    test("Espera-se receber um produto, passando seu id", async () => {
        const findProductByIdUseCase = new FindByIdProductUseCase();
        const result = await findProductByIdUseCase.execute(Product.id);
        expect(result).toEqual(Product);
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
    });

    test("Espera-se receber um produto, passando seu nome", async ()=> {
        const findProductByNameUseCase = new FindProductByName();
        const result = await findProductByNameUseCase.execute(Product.product_name);
        expect(result.id).toBe(Product.id);
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
    });
});

describe("Alterar um produto já existente", ()=>{
    test("Espera-se conseguir alterar informacoes de um produto", async ()=> {
        const updateProductUseCase = new UpdateProductUseCase();
        const result = await updateProductUseCase.execute({status_adm: true, product_info: {
            id: Product.id,
            value:300,
            product_name: "alterando nome"
        }});
        expect(result.product_name).toBe("alterando nome");
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
    });
});

describe("Deletar um produto", ()=> {
    test("Espera-se conseguir deletar um produto", async ()=> {
        const deleteProduct = new DeleteProductUseCase();
        const result = await deleteProduct.execute({status_adm: true, id_product: Product.id}); 
        expect(result.id).toEqual(Product.id);
        expect(result).not.toBeNull();
        expect(result).not.toBeUndefined();
    });
});

