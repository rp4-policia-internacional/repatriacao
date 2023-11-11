import 'reflect-metadata';

import { inject, injectable } from "tsyringe";
import AppError from "@shared/Errors/AppError";
import IRepatriacaoRepository from "../repositories/IRepatriacaoRepository";
import RepatriacaoEntity from "../entities/Repatriacao.entity";


@injectable()
class UpdateRepatriacaoService {
  constructor(
    @inject("RepatriacaoRepository")
    private repatriacaoRepository: IRepatriacaoRepository
  ) {}

  public async execute(data: RepatriacaoEntity): Promise<RepatriacaoEntity> {
    const findRepatriacao = await this.repatriacaoRepository.findById(data.id);

    if (!findRepatriacao) {
      throw new AppError("País não encontrado!!", 404);
    }

    const updateRepatriacao = await this.repatriacaoRepository.update(data);
    return updateRepatriacao;
  }
}

export default UpdateRepatriacaoService;
