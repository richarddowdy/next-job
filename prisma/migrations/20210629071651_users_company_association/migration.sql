/*
  Warnings:

  - You are about to drop the column `company_handle` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_company_handle_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "company_handle",
ADD COLUMN     "company_association" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY ("company_association") REFERENCES "companies"("handle") ON DELETE SET NULL ON UPDATE CASCADE;
