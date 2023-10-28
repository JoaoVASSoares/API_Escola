// Todo model criado eu devo importar aqui pois se não ira funcionar

// Importando o sequelize
import Sequelize from "sequelize";

// Importando o databaseConfig
import databaseConfig from "../config/database";

// importando os models
import Aluno from "../models/Aluno";
import User from "../models/User";
import Foto from "../models/Foto";

// importando todos os models
const models = [Aluno, User, Foto];

// Criando a coneção com o BD utilizando o databaseConfig
const connection = new Sequelize(databaseConfig);

// Iremos percorrer todos os array de forma automatica utilizando o forEach()
// Esta recebendo o model e chamando o metodo init passando as connection
models.forEach((model) => model.init(connection));

// Estamos recebendo um model e verificando se tem o metodo associate e se tiver ele ira fazer o proximo passo é fazer
// o metodo associete passando a conection juntamente com todos os models
models.forEach((model) => model.associate && model.associate(connection.models));
