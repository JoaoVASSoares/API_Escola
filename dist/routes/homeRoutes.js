"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando apenas o Router do express
var _express = require('express');
// Importando o controller já instanciado. Ou seja vem um objeto já
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

// Fazendo a instancia do Router
const router = new (0, _express.Router)();

// Fazendo uma rota get utilizando a função index do controller
router.get("/", _HomeController2.default.index);

exports. default = router;
