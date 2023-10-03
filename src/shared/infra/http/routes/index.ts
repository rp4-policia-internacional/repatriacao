import repatriacaoRoutes from "@modules/repatriacao/infra/http/routes/Repatriacao.routes";
import paisRoutes from "@modules/repatriacao/infra/http/routes/Repatriacao.routes";
import { Router } from "express";
const routes = Router();

routes.use("/repatriacao", repatriacaoRoutes);

export default routes;
