/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `address` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "address_user_id_key" ON "address"("user_id");
