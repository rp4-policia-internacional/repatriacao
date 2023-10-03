import { injectable, inject } from "tsyringe";
import IRepatriacaoRepository from "../repositories/IRepatriacaoRepository";


@injectable()
class ListRepatriacaoService {
  constructor(
    @inject("RepatriacaoRepository")
    private repatriacaoRepository: IRepatriacaoRepository
  ) {}

  public async execute() {
    return await this.repatriacaoRepository.listAll();
  }
}

export default ListRepatriacaoService;
