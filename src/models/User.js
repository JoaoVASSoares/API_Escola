import Sequelize, { Model } from "sequelize";
import bcrptyjs from "bcryptjs";

// Criando o model de aluno. "configuração do sequelize"
export default class User extends Model {
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
            // O tamanho do campo nome. arg => [min, max]. msg => msg a ser exibida
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },

        // Campo email
        email: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Repassamdno uma msg em portugues
          unique: {
            msg: "Email já existe",
          },
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            // Verifica se é um email valido
            isEmail: {
              msg: "Email inválido",
            },
          },
        },

        // Campo de password hash
        password_hash: {
          type: Sequelize.STRING,
          // o valor default dele é "".
          defaultValue: "",
          // Não vamos fazer a validação pois não é um campo enviado pelo usuário
        },

        // Campo não existe no bd é somente virtual. Estamos fazendo uma validação
        password: {
          type: Sequelize.VIRTUAL,
          // o valor default dele é "".
          defaultValue: "",
          // Vamos fazer a validação utilizamos este campo "validate". Ele é derivado do validator
          validate: {
            // O tamanho do campo nome. arg => [min, max]. msg => msg a ser exibida
            len: {
              args: [6, 50],
              msg: "A senha deve ter entre 6 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    /*
    Estamos adicionando um hook (gancho). Onde antes de salvar no banco o user.password_hash ira aguarda a execução da
    criação do hash a partir do user.password
    */
    this.addHook("beforeSave", async (user) => {
      // Validação para garantir que estamos recebendo o password
      if (user.password) {
        // o segundo parametro passado é a quantidade de caracter do salt. Salt é uma forma de adicionar mais segurança
        // gerando caracter aleatorios antes da senha
        user.password_hash = await bcrptyjs.hash(user.password, 8);
      }
    });

    return this;
  }

  // Estamos recebendo o parametro senha e retornando a comparação entre a senha enviada e o hash salvo
  passwordIsValid(password) {
    // Esta comprado a senha recebida, como o hash(varios caracteres aleatórios) que temos no banco
    return bcrptyjs.compare(password, this.password_hash);
  }
}
