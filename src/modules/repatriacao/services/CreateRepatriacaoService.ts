
import { inject, injectable } from "tsyringe";
import IRepatriacaoRepository from "../repositories/IRepatriacaoRepository";
import RepatriacaoEntity from "../entities/Repatriacao.entity";
import IRepatricaoDTO from "../dtos/ICreateRepatriacao.dto";



@injectable()
class CreateRapatriacaoService{

    constructor(
        @inject('RepatriacaoRepository')
        private repatriacaoRepository: IRepatriacaoRepository
    ){}
        public async execute(data: IRepatricaoDTO): Promise<RepatriacaoEntity>{
            const repatriacao = await this.repatriacaoRepository.create(data);
            return repatriacao;
        }
}
export default CreateRapatriacaoService;