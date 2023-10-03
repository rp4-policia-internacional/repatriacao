-- CreateTable
CREATE TABLE "Repatriacao" (
    "id" TEXT NOT NULL,
    "agente_id" VARCHAR NOT NULL,
    "id_vitima" VARCHAR NOT NULL,
    "transporte" VARCHAR NOT NULL,
    "data_inicio" DATE NOT NULL,
    "data_fim" DATE NOT NULL,
    "id_pais_origem" VARCHAR NOT NULL,

    CONSTRAINT "Repatriacao_pkey" PRIMARY KEY ("id")
);
