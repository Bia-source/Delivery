import { prisma } from "../../../../database/prismaClient";


export class FindAllAvailableUseCase {
    async execute() {
        const deliveries = await prisma.deliveries.findMany({
            where: {
                end_at: null,
                id_deliveryman: null
            },
            select: {
                id: true,
                client: true,
                item_name: true,
                id_deliveryman: true,
                created_at: true,
                end_at: true,
                status: true,
            }
        });
        
        return mapDelivery(deliveries);
    }
}

async function mapDelivery(deliveries: any[]){
  const deliveriesFormat = deliveries.map((client)=>{
      console.log(client.id)
      console.log(client.client.username)
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