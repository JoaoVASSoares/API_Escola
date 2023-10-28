// Importando o multer
import multer from "multer";

// Importando as configuraçãos do multer
import multerConfig from "../config/multerConfig";

// Importando o model de foto
import Foto from "../models/Foto";

// Estamos deixando a const (um middleware) pronta com o molter utlizando nossas configurações e indicando que serar um
// unico arquivo
const upload = multer(multerConfig).single("foto");

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

        const foto = await Foto.create({ originalname, filename, aluno_id });

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
export default new FotoController();
