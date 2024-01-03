-- CreateTable
CREATE TABLE "address" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "cep" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighbourhood" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
