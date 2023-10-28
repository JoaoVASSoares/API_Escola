"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importando o multer
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

// Importando as configuraçãos do multer
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

// Importando o model de foto
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

// Estamos deixando a const (um middleware) pronta com o molter utlizando nossas configurações e indicando que serar um
// unico arquivo
const upload = _multer2.default.call(void 0, _multerConfig2.default).single("foto");

class FotoController {
  // Criação do metodo create
  async create(req, res) {
    // esta retornando o upload (configuração do multe)
    return upload(req, res, async (err) => {
      // se não tiver nenhm erro pode enviar o arquivo
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }

      try {
        // Fazendo a desestruturação via atribução
        const { originalname, filename } = req.file;

        // Pegando o id passado no body
        const { aluno_id } = req.body;

        const foto = await _Foto2.default.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }
    });
  }
}

// exportando a class instanciada
exports. default = new FotoController();
