// importando apenas o Router do express
import { Router } from "express";
// Importando o controller já instanciado. Ou seja vem um objeto já
import alunoController from "../controllers/AlunoController";

//Importando o middleware de loginRequired
import loginRequired from "../middlewares/loginRequired";

// Fazendo a instancia do Router
const router = new Router();

// Fazendo uma rota get utilizando a função index do controller
router.get("/", alunoController.index);

// Fazendo uma rota post utilizando a função create do controller. Também podemos utilizar o metodo store
router.post("/", loginRequired, alunoController.create);

// Fazendo uma rota get utilizando a função show do controller recebendo o parametro id
router.get("/:id", alunoController.show); // Lista um usuário

// Fazendo uma rota put utilizando a função update do controller. Podemos editar somente as informações que o token enviou
router.put("/:id", loginRequired, alunoController.update);

// Fazendo uma rota delete utilizando a função delete do controller. Podemos deletar somente aquilo que veio no token
router.delete("/:id", loginRequired, alunoController.delete);

export default router;
