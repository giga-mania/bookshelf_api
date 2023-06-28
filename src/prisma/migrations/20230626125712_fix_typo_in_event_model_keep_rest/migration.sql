/*
  Warnings:

  - You are about to drop the column `evetDate` on the `Event` table. All the data in the column will be lost.
  - Added the required column `eventDate` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "evetDate",
ADD COLUMN     "eventDate" TIMESTAMP(3) NOT NULL;
