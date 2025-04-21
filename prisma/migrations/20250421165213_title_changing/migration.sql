/*
  Warnings:

  - Changed the type of `publishedAt` on the `Title` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Title" DROP COLUMN "publishedAt",
ADD COLUMN     "publishedAt" INTEGER NOT NULL;
