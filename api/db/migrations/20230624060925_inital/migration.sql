-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "color" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "photo_url" TEXT,
    "keeper" TEXT,
    "vacunas" TEXT,
    "observaciones" TEXT,
    "alimentacion" TEXT,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
