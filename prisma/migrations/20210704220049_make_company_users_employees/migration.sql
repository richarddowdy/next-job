/*
  Warnings:

  - You are about to drop the column `company_association` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_company_association_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "company_association",
ADD COLUMN     "employer_handle" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY ("employer_handle") REFERENCES "companies"("handle") ON DELETE SET NULL ON UPDATE CASCADE;
