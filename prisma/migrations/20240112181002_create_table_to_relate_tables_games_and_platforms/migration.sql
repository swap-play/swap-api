-- CreateTable
CREATE TABLE "game_platform" (
    "platform_id" UUID NOT NULL,
    "game_id" UUID NOT NULL,

    CONSTRAINT "game_platform_pkey" PRIMARY KEY ("platform_id","game_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "game_platform_platform_id_key" ON "game_platform"("platform_id");

-- CreateIndex
CREATE UNIQUE INDEX "game_platform_game_id_key" ON "game_platform"("game_id");

-- AddForeignKey
ALTER TABLE "game_platform" ADD CONSTRAINT "game_platform_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_platform" ADD CONSTRAINT "game_platform_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
