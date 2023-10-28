"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Todo model criado eu devo importar aqui pois se não ira funcionar

// Importando o sequelize
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// Importando o databaseConfig
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

// importando os models
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

// importando todos os models
const models = [_Aluno2.default, _User2.default, _Foto2.default];

// Criando a coneção com o BD utilizando o databaseConfig
const connection = new (0, _sequelize2.default)(_database2.default);

// Iremos percorrer todos os array de forma automatica utilizando o forEach()
// Esta recebendo o model e chamando o metodo init passando as connection
models.forEach((model) => model.init(connection));

// Estamos recebendo um model e verificando se tem o metodo associate e se tiver ele ira fazer o proximo passo é fazer
// o metodo associete passando a conection juntamente com todos os models
models.forEach((model) => model.associate && model.associate(connection.models));
