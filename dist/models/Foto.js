"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfig = require('../config/appConfig'); var _appConfig2 = _interopRequireDefault(_appConfig);

// Criando o model de Foto. "configuração do sequelize"
 class Foto extends _sequelize.Model {
  // Criando o método statico init que recebe um sequelize (conecção)
  static init(sequelize) {
    // Estamos chamando o init da class pai. No caso no model do sequelize
    // O primeiro objeto ira receber nossos campos e no segundo o sequelize
    super.init(
      {
        // Campo nome original do arquivo
        originalname: {
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.STRING,
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
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_appConfig2.default.url}/images/${this.getDataValue("filename")}`;
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
} exports.default = Foto;
