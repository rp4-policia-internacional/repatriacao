import { Router } from "express";
import RepatriacaoController from "../controllers/RepatriacaoController";

//conjunto de rotas relacionada as operações da vitima



const repatriacaoRoutes = Router();

const controller = new RepatriacaoController();
 repatriacaoRoutes.post("/", controller.create);
 repatriacaoRoutes.delete("/:id", controller.delete);
 repatriacaoRoutes.get("/:id", controller.getOne);
 repatriacaoRoutes.get("/", controller.getAll);
 repatriacaoRoutes.put("/", controller.update);


 export default  repatriacaoRoutes;
