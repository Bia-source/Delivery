/*
  Warnings:

  - You are about to drop the column `item_name` on the `deliveries` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "item_name";

-- AddForeignKey
ALTER TABLE "Itens_Info" ADD CONSTRAINT "Itens_Info_name_fkey" FOREIGN KEY ("name") REFERENCES "deliveries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
