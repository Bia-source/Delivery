/*
  Warnings:

  - The values [CRIADO,TRANSITO,FINALIZADO] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('AGUARDANDO_RETIRADA', 'EM_TRANSITO', 'ENTREGUE');
ALTER TABLE "deliveries" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "deliveries" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "deliveries" ALTER COLUMN "status" SET DEFAULT 'AGUARDANDO_RETIRADA';
COMMIT;

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "status" SET DEFAULT E'AGUARDANDO_RETIRADA';
