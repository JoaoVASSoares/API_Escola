// importando apenas o Router do express
import { Router } from "express";
// Importando o controller já instanciado. Ou seja vem um objeto já
import homeController from "../controllers/HomeController";

// Fazendo a instancia do Router
const router = new Router();

// Fazendo uma rota get utilizando a função index do controller
router.get("/", homeController.index);

export default router;
