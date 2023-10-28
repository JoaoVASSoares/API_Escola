// importando o dotenv
require("dotenv").config();
// configurando o database
module.exports = {
  // Configurando o dialeto
  dialect: "mariadb",
  // configurando o host -> Pegando os dados do ".env"
  host: process.env.DATABASE_HOST,
  // configurando a port -> Pegando os dados do ".env"
  port: process.env.DATABASE_PORT,
  // configurando o username -> Pegando os dados do ".env"
  username: process.env.DATABASE_USERNAME,
  // configurando a senha -> Pegando os dados do ".env"
  password: process.env.DATABASE_PASSWORD,
  // configurando a database -> Pegando os dados do ".env"
  database: process.env.DATABASE,
  // Define quando foi criado ou modificado no banco
  define: {
    timestamps: true,
    // o underscored converte do camelCase para a utilização do "_" ex: "nomeAluno" -> "nome_aluno"
    underscored: true,
    underscoredAll: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
  dialectOptions: {
    timezone: "America/Sao_Paulo",
  },
  // configurando o timezone
  timezone: "America/Sao_Paulo",
};
