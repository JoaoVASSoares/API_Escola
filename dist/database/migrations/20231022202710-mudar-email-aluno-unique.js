"use strict";// MIGRAÇÕES SÃO ALTERAÇÕES DIRETAS NA BASE DE DADOS -> Referente a edição da tabela no bd
// Estamos editando a tabela aluno, na coluna email
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Editando a tabela aluno, na coluna email
    return queryInterface.changeColumn("alunos", "email", {
      type: Sequelize.STRING,
      allowNull: false,
      // Unico no bd
      unique: true,
    });
  },
  down: () => {},
};
