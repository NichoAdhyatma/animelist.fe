/*
  Warnings:

  - You are about to alter the column `rating` on the `comment` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `rating` DOUBLE NOT NULL DEFAULT 0;
