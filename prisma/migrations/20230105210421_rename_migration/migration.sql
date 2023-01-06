/*
  Warnings:

  - You are about to drop the `Itens_Info` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Itens_Info_Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Itens_Info_Product" DROP CONSTRAINT "Itens_Info_Product_id_delivery_fkey";

-- DropForeignKey
ALTER TABLE "Itens_Info_Product" DROP CONSTRAINT "Itens_Info_Product_id_product_fkey";

-- DropTable
DROP TABLE "Itens_Info";

-- DropTable
DROP TABLE "Itens_Info_Product";

-- CreateTable
CREATE TABLE "itens_info" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "itens_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens_info_product" (
    "id" TEXT NOT NULL,
    "id_product" TEXT,
    "id_delivery" TEXT,
    "quantity" INTEGER,

    CONSTRAINT "itens_info_product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "itens_info_product" ADD CONSTRAINT "itens_info_product_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens_info_product" ADD CONSTRAINT "itens_info_product_id_delivery_fkey" FOREIGN KEY ("id_delivery") REFERENCES "deliveries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
