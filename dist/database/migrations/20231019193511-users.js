"use strict";// MIGRAÇÕES SÃO ALTERAÇÕES DIRETAS NA BASE DE DADOS -> Referente a ciração da tabela no bd
// Estamos criando a tabela user
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Criando a tablea Users
    return queryInterface.createTable("users", {
      //Criação dos campos da tabla
      // Fazendo a configuração do "id"
      id: {
        // tipo
        type: Sequelize.INTEGER,
        // Não pode ser nulo
        allowNull: false,
        // autoincrementavel
        autoIncrement: true,
        // ChavePrimaria
        primaryKey: true,
      },
      // Campo nome
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Campo email
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        // Unico no bd
        unique: true,
      },
      // Uma forma de "criptografia" de senha. Embraralhar os caracteres.
      // Verificação no login para ver se o hash bate com a senha do usuarios enviada
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Campo created_at
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      // Campo update_at
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("users");
  },
};
