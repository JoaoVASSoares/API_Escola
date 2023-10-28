import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

// Criando o model de Foto. "configuração do sequelize"
export default class Foto extends Model {
  // Criando o método statico init que recebe um sequelize (conecção)
  static init(sequelize) {
    // Estamos chamando o init da class pai. No caso no model do sequelize
    // O primeiro objeto ira receber nossos campos e no segundo o sequelize
    super.init(
      {
        // Campo nome original do arquivo
        originalname: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            notEmpty: {
              msg: "O campo não pode estar vazio",
            },
          },
        },
        // Campo novo nome do arquivo
        filename: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            notEmpty: {
              msg: "O campo não pode estar vazio",
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`;
          },
        },
      },
      {
        sequelize,
        tableName: "photos",
      }
    );
    return this;
  }

  /*
  Uma forma de associação. basicamente falando que a foto pertence a um aluno
    this fala sobre este model.
    belongsTo
    1º parametro -> fala do model de que ele pertence no caso o de Aluno
    2º parametro -> Fala sobre qual campo esta associado a chave primeira no caso estamos falando que "aluno_id" é achave
    primeira vindo da tabela de alunos
  */
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });

    // Caso eu fosse criar este método no aluno.
    // this.hasMany(model.Foto,{foreignKey: "aluno_id"})
  }
}
