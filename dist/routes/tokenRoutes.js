"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// importando apenas o Router do express
var _express = require('express');
// Importando o controller já instanciado. Ou seja vem um objeto já
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

// Fazendo a instancia do Router
const router = new (0, _express.Router)();

// Fazendo uma rota post utilizando a função create do controller
router.post("/", _TokenController2.default.create);

exports. default = router;
