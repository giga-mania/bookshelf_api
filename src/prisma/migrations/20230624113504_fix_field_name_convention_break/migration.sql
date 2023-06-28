/*
  Warnings:

  - You are about to drop the column `publish_date` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "publish_date",
ADD COLUMN     "publishDate" TIMESTAMP(3);
