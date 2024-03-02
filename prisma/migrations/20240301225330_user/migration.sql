/*
  Warnings:

  - Added the required column `balance` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cumulativeIncome` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noHp` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamBenefit` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todayIncome` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yesterdayIncome` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `balance` VARCHAR(191) NOT NULL,
    ADD COLUMN `cumulativeIncome` INTEGER NOT NULL,
    ADD COLUMN `noHp` VARCHAR(191) NOT NULL,
    ADD COLUMN `teamBenefit` INTEGER NOT NULL,
    ADD COLUMN `todayIncome` INTEGER NOT NULL,
    ADD COLUMN `yesterdayIncome` INTEGER NOT NULL;
