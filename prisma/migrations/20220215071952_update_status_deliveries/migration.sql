-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AGUARDANDO', 'TRANSITO', 'ENTREGUE');

-- AlterTable
ALTER TABLE "deliveries" ADD COLUMN     "status" "Status" NOT NULL DEFAULT E'AGUARDANDO';
