import { Product, Clients } from './../generated/schemas';
import { gql } from "apollo-server";

export const typeDefs = gql`
scalar Date

 type Product {
    id:String             
    product_name:String
    product_category:String
    quantity_stock:Int    
    discount:Int    
    value:Int
    itens_info_product:[Itens_Info_Product]
 }

 type Itens_Info_Product {
    id:String
    id_product:String
    id_delivery:String
    quantity:Int
    produto:Product 
    delivery:Deliveries
 }

 type Deliveryman {
    id:String      
    username:String     
    password:String
    email:String 
    Deliveries:[Deliveries]
 }

 type Clients {
    id:String 
    username:String       
    password:String
    email:String 
    adm:Boolean  
    adress:String
    avatar:String
    Deliveries:[Deliveries]
 }

 type ReturnClient {
    id:String 
    username:String       
    email:String   
    adress:String
    avatar:String
    adm: Boolean
    Deliveries:[Deliveries]
 }

 type ReturnInfoUser {
   id:String 
   username:String       
   email:String  
 }
 
 type ReturnAuthenticate {
   client: ReturnInfoUser
   token: String
 }

 type Deliveries {
  id:String           
  item_name:[Itens_Info_Product]
  id_client:String
  client:Clients   
  id_deliveryman:String
  deliveryman:Deliveryman  
  created_at:Date           
  end_at:String
  status:Status 
 }

 type UserInfo {
   id_client:String
   username:String
 }

 type ItensDelivery {
    id:ID!
    id_product:String
    id_delivery:String
    quantity:Int
    productInfo:ProductInfoDelivery
 }

 type ProductInfoDelivery {
   name:String
	category:String
	value:Int
	discount:Int
 }

 type DeliveryInfo {
   id:String
   itens:[ItensDelivery]
   id_deliveryman:String
   created_at:Date
   end_at:String
   status:String
 }

 type ReturnDeliveries {
   userInfo:UserInfo
   deliveryInfo: DeliveryInfo
 }

 enum Status {
    AGUARDANDO
    TRANSITO
    ENTREGUE
  }

 type Query {
    getAllProducts: [Product],
    getAllDeliveries(id_user: String!): [ReturnDeliveries],
    getDeliveryStatus(status: Status!): [ReturnDeliveries],
    getProductById(id_product: String!): Product,
    getProductByName(product_name: String!): Product,
    getClientById(id_client: String!): Clients,
 }

 type Mutation {
   createProduct(
      product_name:String!
      product_category:String!
      quantity_stock:Int!    
      discount:Int!    
      value:Int!, status_adm: Boolean!
   ): Product,
   deleteProduct(status_adm: Boolean!, id_product: String!): Product,
   updateProductAdm(
      status_adm: Boolean!,
      id_product: String!,
      value: Int,
      product_category: String,
      product_name: String,
      quantity_stock: Int,
      discount: Int
   ): Product,
   createClient(
      username: String!,
      password: String!,
      email: String!,
      adm: Boolean,
      adress: String!
   ): ReturnClient,
   deleteClient(id_client: String!): ReturnClient,
   updateRegisterClient(id_client: String!, username: String, email: String): ReturnClient,
   authenticateClient(username: String!, password: String!): ReturnAuthenticate,
   authenticateDeliveryman(username: String!, password: String!): ReturnAuthenticate,
 }
`;
