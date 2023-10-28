// importando apenas o Router do express
import { Router } from "express";

// Importando o controller já instanciado. Ou seja vem um objeto já
import fotoController from "../controllers/FotoController";

//Importando o middleware de loginRequired
import loginRequired from "../middlewares/loginRequired";

// Fazendo a instancia do Router
const router = new Router();

// Fazendo uma rota post passando primeiro pelo molter indicando que ser somente um arquivo e qual o nome da key que ira
// a foto na request e dpois utilizando a função create do controller
router.post("/", loginRequired, fotoController.create);

export default router;
