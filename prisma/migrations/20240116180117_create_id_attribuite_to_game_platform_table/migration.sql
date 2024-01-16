/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `game_platform` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `game_platform` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "game_platform" ADD COLUMN     "id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "game_platform_id_key" ON "game_platform"("id");
