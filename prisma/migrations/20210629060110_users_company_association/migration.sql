-- AlterTable
ALTER TABLE "users" ADD COLUMN     "company_handle" TEXT,
ADD COLUMN     "is_admin" TEXT DEFAULT E'false';

-- AddForeignKey
ALTER TABLE "users" ADD FOREIGN KEY ("company_handle") REFERENCES "companies"("handle") ON DELETE SET NULL ON UPDATE CASCADE;
