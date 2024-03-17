-- DropForeignKey
ALTER TABLE `categoryProduct` DROP FOREIGN KEY `categoryProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `imageProduct` DROP FOREIGN KEY `imageProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `typeProduct` DROP FOREIGN KEY `typeProduct_productId_fkey`;

-- DropForeignKey
ALTER TABLE `userBuyTypeProduct` DROP FOREIGN KEY `userBuyTypeProduct_userBuyId_fkey`;

-- AlterTable
ALTER TABLE `userBuy` ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `userBuy` ADD CONSTRAINT `userBuy_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userBuyTypeProduct` ADD CONSTRAINT `userBuyTypeProduct_userBuyId_fkey` FOREIGN KEY (`userBuyId`) REFERENCES `userBuy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categoryProduct` ADD CONSTRAINT `categoryProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `typeProduct` ADD CONSTRAINT `typeProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `imageProduct` ADD CONSTRAINT `imageProduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
