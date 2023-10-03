
import { container } from "tsyringe";
import { Request, Response } from "express";
import CreateRepatriacaoService from "@modules/repatriacao/services/CreateRepatriacaoService";
import DeleteRepatriacaoService from "@modules/repatriacao/services/DeleteRepatriacaoService";
import FindOneRepatriacaoService from "@modules/repatriacao/services/FindOneRepatriacaoService";
import ListRepatriacaoService from "@modules/repatriacao/services/ListRepatriacaoService";
import UpdateRepatriacaoService from "@modules/repatriacao/services/UpdateRepatriacaoService";


export default class RepatriacaoController {
  public async create(req: Request, res: Response): Promise<Response> {
    const createRepatriacao = container.resolve(CreateRepatriacaoService);

    const {
      id,
      agente_id,
      id_vitima,
      transporte,
      data_inicio ,
      data_fim,
      id_pais_origem
    } = req.body;

    const formatedDate = new Date(data_inicio).toISOString();
    const formatedDate2 = new Date(data_fim).toISOString();

    const createdRepatriacao = await createRepatriacao.execute({
      id,
      agente_id,
      id_vitima,
      transporte,
      data_inicio: new Date(formatedDate),
      data_fim: new Date(formatedDate2),
      id_pais_origem,

   });

   return res.status(201).json(createdRepatriacao);
  }
  //delete pelo id
  public async delete(req: Request, res: Response): Promise<Response> {
    const deleteRepatriacao = container.resolve(DeleteRepatriacaoService);

    const { id } = req.params;

    const deletedRepatriacao = await deleteRepatriacao.execute(id);

    return res.json(deletedRepatriacao).status(202).send();
  }

  public async getOne(req: Request, res: Response): Promise<Response> {
    const getOneRepatriacao = container.resolve(FindOneRepatriacaoService);

    const { id } = req.params;

    const gotOneRepatriacao = await getOneRepatriacao.execute(id);
    return res.json(gotOneRepatriacao).status(200).send();
  }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const getAllRepatriacao = container.resolve(ListRepatriacaoService);

    const gotAllRepatriacao = await getAllRepatriacao.execute();

    return res.json(gotAllRepatriacao).status(200).send();
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const updateRepatriacao = container.resolve(UpdateRepatriacaoService);

    const {
        id,
       agente_id,
       id_vitima,
       transporte,
       data_inicio,
       data_fim,
       id_pais_origem,
    } = req.body;
       const formatedDate = new Date(data_inicio).toISOString();
       const formatedDate2 = new Date(data_fim).toISOString();
   
    const createRepatriacao= await updateRepatriacao
    .execute({
        id,
        agente_id,
        id_vitima,
        transporte,
        data_inicio: new Date(formatedDate),
        data_fim: new Date(formatedDate2),
        id_pais_origem,

    });

    return res.json(createRepatriacao).status(201).send();
}


}