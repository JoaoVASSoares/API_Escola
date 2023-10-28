"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importando o multer
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

// Importando o ex e o resolve name do path
var _path = require('path');

// Funçção para gerar numero aleatorio a fim de evitar nomes iguais
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// Configurando o multer
exports. default = {
  // Função para filter o tipo de arquivo recebido pelo servidor=
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new _multer2.default.MulterError("Arquivo não suportado"));
    }
    return cb(null, true);
  },
  // Storage -> onde sera salvo a arquivo. No nosso caso estamos salvando no disco
  storage: _multer2.default.diskStorage({
    // Destino, recebe req, file, e callback.
    destination: (req, file, cb) => {
      // Chamamos o callback
      /*
      1ª é o erro (null)
      2ª é o caminho que sera salvo o arquivo (caminho do arquivo, volta uma parta, volta outra, destino)
      */
      cb(null, _path.resolve.call(void 0, __dirname, "..", "..", "uploads", "images"));
    },
    // Nome do arquivo
    filename: (req, file, cb) => {
      // Chamamos o callback
      /*
      1ª é o erro (null)
      2ª é o nome do novo arquivo (date.now()). Extname pega a extenção então estou passando como parametro o file.originalname
      ou seja o nome do arquivo original para pegarmos a extenção
      */
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};
