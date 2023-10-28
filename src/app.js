// Importando o dotenv;
import dotenv from "dotenv";
// Configurando o dotenv
dotenv.config();

import { resolve } from "path";

// importando o database e o executando automaticamente
import "./database";

// Importamos express
import express from "express";

// Importando as rotas
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

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
