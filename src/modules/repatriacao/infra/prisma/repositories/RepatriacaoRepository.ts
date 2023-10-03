
import IRepatricaoDTO from "@modules/repatriacao/dtos/ICreateRepatriacao.dto";
import RepatriacaoEntity from "@modules/repatriacao/entities/Repatriacao.entity";
import IRepatriacaoRepository from "@modules/repatriacao/repositories/IRepatriacaoRepository";

import { prisma } from "@shared/infra/prisma";

export default class RepatriacaoRepository implements IRepatriacaoRepository {
  public async create(data: IRepatricaoDTO): Promise<RepatriacaoEntity> {
    const repatriacao = await prisma.repatriacao.create({ data });

    return repatriacao as unknown as RepatriacaoEntity;
  }

  public async delete(id: string): Promise<void> {
    await prisma.repatriacao.delete({ where: { id } });
  }
  public async findById(id: string): Promise<RepatriacaoEntity> {
    const repatriacao = await prisma.repatriacao.findUnique({ where: { id } });

    return repatriacao as unknown as RepatriacaoEntity;
  }
  public async update(data: RepatriacaoEntity): Promise<RepatriacaoEntity> {
    const repatriacao = await prisma.repatriacao.update({ where: { id: data.id }, data });

    return repatriacao as unknown as RepatriacaoEntity;
  }
  public async listAll(): Promise<RepatriacaoEntity[]> {
    return await prisma.repatriacao.findMany();
  }
}
