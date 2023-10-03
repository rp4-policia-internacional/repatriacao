import { injectable, inject } from "tsyringe";
import IRepatriacaoRepository from "../repositories/IRepatriacaoRepository";

@injectable()
class FindOneRepatriacaoService {
  constructor(
    @inject("RepatriacaoRepository")
    private repatriacaoRepository: IRepatriacaoRepository
  ) {}

  public async execute(id: string) {
    const findRepatriacao = await this.repatriacaoRepository.findById(id);
    return findRepatriacao;
  }
}

export default FindOneRepatriacaoService;
