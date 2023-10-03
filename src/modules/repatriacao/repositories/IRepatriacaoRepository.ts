import IRepatricaoDTO from "../dtos/ICreateRepatriacao.dto";
import RepatriacaoEntity from "../entities/Repatriacao.entity";


export default interface IRepatriacaoRepository {
  create(data: IRepatricaoDTO): Promise<RepatriacaoEntity>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<RepatriacaoEntity>;
  update(data: RepatriacaoEntity): Promise<RepatriacaoEntity>;
  listAll(): Promise<RepatriacaoEntity[]>;
}
