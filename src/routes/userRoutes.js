// importando apenas o Router do express
import { Router } from "express";

// Importando o controller já instanciado. Ou seja vem um objeto já
import userController from "../controllers/UserController";

//Importando o middleware de loginRequired
import loginRequired from "../middlewares/loginRequired";

// Fazendo a instancia do Router
const router = new Router();

// Fazendo uma rota post utilizando a função create do controller. Também podemos utilizar o metodo store
router.post("/", userController.create);

// Tanto o index quanto o show não deveria existir. (Falha de segurança)

// Fazendo uma rota get passando primeiro pelo middleware para depois utilizando a função index do controller
router.get("/", userController.index); // Lista todos os usuários

// Fazendo uma rota get utilizando a função show do controller recebendo o parametro id
router.get("/:id", userController.show); // Lista um usuário

// Fazendo uma rota put utilizando a função update do controller. Podemos editar somente as informações que o token enviou
router.put("/", loginRequired, userController.update);

// Fazendo uma rota delete utilizando a função delete do controller. Podemos deletar somente aquilo que veio no token
router.delete("/", loginRequired, userController.delete);

export default router;

/*
  Cada controler é bom ter cerca de 5 métodos:

  index -> Lista todos os usuários -> Geralmente GET
  store/create -> Cria um novo usuário -> Geralmente POST
  delete -> Apaga um usuário -> Geralmente DELETE
  show -> Mostra um usuário -> Geralmente GET
  update -> Atualiza um usuário -> Geralmente PATCH(utilizado normalmente para alterar somente um valor) ou
            PUT(Substitui por um objeto inteiro)
*/
