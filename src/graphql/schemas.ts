import { gql } from 'apollo-server';

export const typeDefs = gql`
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
  created_at:String           
  end_at:String
  status:Status 
 }
 
 enum Status {
    AGUARDANDO
    TRANSITO
    ENTREGUE
  }

 type Query {
    products: [Product],
    deliveries: [Deliveries]
 }
`;