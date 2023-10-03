
import RepatriacaoRepository from "@modules/repatriacao/infra/prisma/repositories/RepatriacaoRepository";
import IRepatriacaoRepository from "@modules/repatriacao/repositories/IRepatriacaoRepository";
import { container } from "tsyringe";


container.registerSingleton<IRepatriacaoRepository>("RepatriacaoRepository", RepatriacaoRepository);
