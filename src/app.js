// Importando o dotenv;
import dotenv from "dotenv";
// Configurando o dotenv
dotenv.config();

// Importando o resolve do Path
import { resolve } from "path";

// importando o database e o executando automaticamente
import "./database";

// Importamos express
import express from "express";

// Importando o cors e o helmet
import cors from "cors";
import helmet from "helmet";

// Importando as rotas
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

// Domínios na Whitlist
// Usamos para definir os domínios permitidos a acessar a API
const whitlist = ["http://localhost:3000"];

// configuração do middleware de cors
const corsOptions = {
  // Função para ver se vamos ou não deixar acessar a api
  origin: function (origin, callback) {
    // Se a origin estiver dentro da whitlist ou não existir ela pode continuar
    if (whitlist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  // Sempre que instanciar a class o construtor será executada.
  constructor() {
    // falamos que o app é o express
    this.app = express();
    // chamos o middlewares e routes
    this.middlewares();
    this.routes();
  }

  // Estamos configurando os middlewares
  middlewares() {
    // Importando os middlewares de cores e helmet
    // Definimos as configurações do core. Ou seja antes de chegar na rota ira verificar quem esta tentando ascessar
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    // Estamos configurando o express dentro do middlewares
    // o urlencoded é um parser das informações vindas no body da request
    this.app.use(express.urlencoded({ extended: true }));
    // o json() é um parser das informações vindas de uma requisção post
    this.app.use(express.json());
    // Fazendo mostrar rotas staticas.
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    // Estamos falando para aplicação usar a rota, o caminho e local
    // Todas rotas home
    this.app.use("/", homeRoutes);
    // Todas rotas users
    this.app.use("/users/", userRoutes);
    // Todas as rotas de token
    this.app.use("/tokens/", tokenRoutes);
    // Todas as rotas de aluno
    this.app.use("/alunos/", alunoRoutes);
    // Todas as rotas de fotos
    this.app.use("/fotos/", fotoRoutes);
  }
}

// Estamos exportando o express (app) -> caso não tivese o ".app" estariamos expostando a class instanciada
export default new App().app;
