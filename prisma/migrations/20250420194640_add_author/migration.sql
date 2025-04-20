/*
  Warnings:

  - Added the required column `bio` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photoUrl` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "nationality" TEXT NOT NULL,
ADD COLUMN     "photoUrl" TEXT NOT NULL;
