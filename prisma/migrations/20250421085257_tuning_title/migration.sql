/*
  Warnings:

  - Added the required column `coverUrl` to the `Title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `Title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfPages` to the `Title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Title" ADD COLUMN     "coverUrl" TEXT NOT NULL,
ADD COLUMN     "isbn" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "numberOfPages" INTEGER NOT NULL;
