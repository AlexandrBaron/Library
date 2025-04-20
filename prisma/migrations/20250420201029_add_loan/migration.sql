/*
  Warnings:

  - Added the required column `dueDate` to the `Loan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Loan" ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'Active',
ALTER COLUMN "loanedAt" SET DEFAULT CURRENT_TIMESTAMP;
