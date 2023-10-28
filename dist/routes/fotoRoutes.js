"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando apenas o Router do express
var _express = require('express');

// Importando o controller já instanciado. Ou seja vem um objeto já
var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);

//Importando o middleware de loginRequired
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

// Fazendo a instancia do Router
const router = new (0, _express.Router)();

// Fazendo uma rota post passando primeiro pelo molter indicando que ser somente um arquivo e qual o nome da key que ira
// a foto na request e dpois utilizando a função create do controller
router.post("/", _loginRequired2.default, _FotoController2.default.create);

exports. default = router;
