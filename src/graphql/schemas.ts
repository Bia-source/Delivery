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
    getProductById(id_product: String!): Product
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
 }
`;
