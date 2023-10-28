// importando apenas o Router do express
import { Router } from "express";
// Importando o controller já instanciado. Ou seja vem um objeto já
import tokenController from "../controllers/TokenController";

// Fazendo a instancia do Router
const router = new Router();

// Fazendo uma rota post utilizando a função create do controller
router.post("/", tokenController.create);

export default router;
