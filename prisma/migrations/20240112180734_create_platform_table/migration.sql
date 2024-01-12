-- CreateTable
CREATE TABLE "platforms" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "platforms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");
