"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importando o dotenv;
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
// Configurando o dotenv
_dotenv2.default.config();

var _path = require('path');

// importando o database e o executando automaticamente
require('./database');

// Importamos express
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

// Importando as rotas
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

class App {
  // Sempre que instanciar a class o construtor será executada.
  constructor() {
    // falamos que o app é o express
    this.app = _express2.default.call(void 0, );
    // chamos o middlewares e routes
    this.middlewares();
    this.routes();
  }

  // Estamos configurando os middlewares
  middlewares() {
    // Estamos configurando o express dentro do middlewares
    // o urlencoded é um parser das informações vindas no body da request
    this.app.use(_express2.default.urlencoded({ extended: true }));
    // o json() é um parser das informações vindas de uma requisção post
    this.app.use(_express2.default.json());
    // Fazendo mostrar rotas staticas.
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, "uploads")));
  }

  routes() {
    // Estamos falando para aplicação usar a rota, o caminho e local
    // Todas rotas home
    this.app.use("/", _homeRoutes2.default);
    // Todas rotas users
    this.app.use("/users/", _userRoutes2.default);
    // Todas as rotas de token
    this.app.use("/tokens/", _tokenRoutes2.default);
    // Todas as rotas de aluno
    this.app.use("/alunos/", _alunoRoutes2.default);
    // Todas as rotas de fotos
    this.app.use("/fotos/", _fotoRoutes2.default);
  }
}

// Estamos exportando o express (app) -> caso não tivese o ".app" estariamos expostando a class instanciada
exports. default = new App().app;
