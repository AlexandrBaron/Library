/*
  Warnings:

  - Added the required column `genreId` to the `Title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Title" ADD COLUMN     "genreId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Title" ADD CONSTRAINT "Title_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
