import { inject, injectable } from "tsyringe";
import IRepatriacaoRepository from "../repositories/IRepatriacaoRepository";
import AppError from "@shared/Errors/AppError";

@injectable()
class DeleteRepatriacaoService {
  constructor(
    @inject("RepatriacaoRepository")
    private repatriacaoRepository: IRepatriacaoRepository
  ) {}
  public async execute(id: string): Promise<void> {
    const findRepatriacao = await this.repatriacaoRepository.findById(id);

    if (!findRepatriacao) {
      throw new AppError("País não encontrado!!", 404);
    }

    await this.repatriacaoRepository.delete(id);

    return;
  }
}

export default DeleteRepatriacaoService;
