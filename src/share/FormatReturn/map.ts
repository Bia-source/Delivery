export async function mapDelivery(deliveries: any[]){
    const deliveriesFormat = deliveries.map((client)=>{
        return {
            user:{
                id_client: client.client.id,
                username: client.client.username
            },
            delivery: {
               id: client.id,
               item_name: client.item_name,
               id_deliveryman: client.id_deliveryman,
               created_at: client.created_at,
               end_at: client.end_at,
               status: client.status,
            }
        }
     })
     return deliveriesFormat;
  }

  export async function mapDeliveryFindClient(deliveries: any[]){
    const deliveriesFormat = deliveries.map((client)=>{
        return {
            delivery: {
               id: client.id,
               item_name: client.item_name,
               id_deliveryman: client.id_deliveryman,
               created_at: client.created_at,
               end_at: client.end_at,
               status: client.status,
            }
        }
     })
     return deliveriesFormat;
  }