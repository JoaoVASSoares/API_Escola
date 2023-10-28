// Importando o multer
import multer from "multer";

// Importando o ex e o resolve name do path
import { extname, resolve } from "path";

// Funçção para gerar numero aleatorio a fim de evitar nomes iguais
const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

// Configurando o multer
export default {
  // Função para filter o tipo de arquivo recebido pelo servidor=
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("Arquivo não suportado"));
    }
    return cb(null, true);
  },
  // Storage -> onde sera salvo a arquivo. No nosso caso estamos salvando no disco
  storage: multer.diskStorage({
    // Destino, recebe req, file, e callback.
    destination: (req, file, cb) => {
      // Chamamos o callback
      /*
      1ª é o erro (null)
      2ª é o caminho que sera salvo o arquivo (caminho do arquivo, volta uma parta, volta outra, destino)
      */
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    // Nome do arquivo
    filename: (req, file, cb) => {
      // Chamamos o callback
      /*
      1ª é o erro (null)
      2ª é o nome do novo arquivo (date.now()). Extname pega a extenção então estou passando como parametro o file.originalname
      ou seja o nome do arquivo original para pegarmos a extenção
      */
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
