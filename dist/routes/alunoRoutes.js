"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando apenas o Router do express
var _express = require('express');
// Importando o controller já instanciado. Ou seja vem um objeto já
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);

//Importando o middleware de loginRequired
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

// Fazendo a instancia do Router
const router = new (0, _express.Router)();

// Fazendo uma rota get utilizando a função index do controller
router.get("/", _AlunoController2.default.index);

// Fazendo uma rota post utilizando a função create do controller. Também podemos utilizar o metodo store
router.post("/", _loginRequired2.default, _AlunoController2.default.create);

// Fazendo uma rota get utilizando a função show do controller recebendo o parametro id
router.get("/:id", _AlunoController2.default.show); // Lista um usuário

// Fazendo uma rota put utilizando a função update do controller. Podemos editar somente as informações que o token enviou
router.put("/:id", _loginRequired2.default, _AlunoController2.default.update);

// Fazendo uma rota delete utilizando a função delete do controller. Podemos deletar somente aquilo que veio no token
router.delete("/:id", _loginRequired2.default, _AlunoController2.default.delete);

exports. default = router;
