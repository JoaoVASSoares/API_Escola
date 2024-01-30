"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando apenas o Router do express
var _express = require('express');

// Importando o controller já instanciado. Ou seja vem um objeto já
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);

//Importando o middleware de loginRequired
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

// Fazendo a instancia do Router
const router = new (0, _express.Router)();

// Fazendo uma rota post utilizando a função create do controller. Também podemos utilizar o metodo store
router.post("/", _UserController2.default.create);

// Tanto o index quanto o show não deveria existir. (Falha de segurança)

// Fazendo uma rota get passando primeiro pelo middleware para depois utilizando a função index do controller
router.get("/", _UserController2.default.index); // Lista todos os usuários

// Fazendo uma rota get utilizando a função show do controller recebendo o parametro id
router.get("/:id", _UserController2.default.show); // Lista um usuário

// Fazendo uma rota put utilizando a função update do controller. Podemos editar somente as informações que o token enviou
router.put("/", _loginRequired2.default, _UserController2.default.update);

// Fazendo uma rota delete utilizando a função delete do controller. Podemos deletar somente aquilo que veio no token
router.delete("/", _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/*
  Cada controler é bom ter cerca de 5 métodos:

  index -> Lista todos os usuários -> Geralmente GET
  store/create -> Cria um novo usuário -> Geralmente POST
  delete -> Apaga um usuário -> Geralmente DELETE
  show -> Mostra um usuário -> Geralmente GET
  update -> Atualiza um usuário -> Geralmente PATCH(utilizado normalmente para alterar somente um valor) ou
            PUT(Substitui por um objeto inteiro)
*/
