-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "product_nome" TEXT NOT NULL,
    "product_category" TEXT NOT NULL,
    "quantity_stock" INTEGER NOT NULL DEFAULT 0,
    "discount" INTEGER NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
