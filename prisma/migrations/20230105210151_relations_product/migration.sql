/*
  Warnings:

  - The primary key for the `Itens_Info` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Itens_Info` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Itens_Info" DROP CONSTRAINT "Itens_Info_name_fkey";

-- AlterTable
ALTER TABLE "Itens_Info" DROP CONSTRAINT "Itens_Info_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Itens_Info_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Itens_Info_Product" (
    "id" TEXT NOT NULL,
    "id_product" TEXT,
    "id_delivery" TEXT,
    "quantity" INTEGER,

    CONSTRAINT "Itens_Info_Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Itens_Info_Product" ADD CONSTRAINT "Itens_Info_Product_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Itens_Info_Product" ADD CONSTRAINT "Itens_Info_Product_id_delivery_fkey" FOREIGN KEY ("id_delivery") REFERENCES "deliveries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
