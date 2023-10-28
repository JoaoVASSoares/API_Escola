import Sequelize, { Model } from "sequelize";

// Criando o model de aluno. "configuração do sequelize"
export default class Aluno extends Model {
  // Criando o método statico init que recebe um sequelize (conecção)
  static init(sequelize) {
    // Estamos chamando o init da class pai. No caso no model do sequelize
    // O primeiro objeto ira receber nossos campos e no segundo o sequelize
    super.init(
      {
        // Campo nome
        nome: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            len: {
              args: [3, 255],
              msg: "Nome precisa ter entre 3 e 255 caracteres",
            },
          },
        },

        // Campo sobrenome
        sobrenome: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            len: {
              args: [3, 255],
              msg: "Sobrenome precisa ter entre 3 e 255 caracteres",
            },
          },
        },

        // Campo email
        email: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Repassamdno uma msg em portugues e falando que é unico
          unique: {
            msg: "Email já existe",
          },
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },

        // Campo idade
        idade: {
          type: Sequelize.INTEGER,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            isInt: {
              msg: "Idade inválida",
            },
          },
        },

        // Campo peso
        peso: {
          type: Sequelize.FLOAT,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            isFloat: {
              msg: "Peso inválido",
            },
          },
        },

        // Campo altura
        altura: {
          type: Sequelize.FLOAT,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            isFloat: {
              msg: "Altura inválido",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  /*
  Uma forma de associação. basicamente falando que a um aluno tem varias fotos
    this fala sobre este model.
    hasmany
    1º parametro -> fala do model de que ele pertence no caso o de Ftos
    2º parametro -> Fala sobre qual campo esta associado a chave primeira no caso estamos falando que "aluno_id" é achave
    primeira vindo da tabela de alunos
  */
  static associate(models){
    this.hasMany(models.Foto,{foreignKey: "aluno_id"})
  }

}
