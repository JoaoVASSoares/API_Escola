"use strict";module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "alunos",
          "nome",
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "alunos",
          "sobrenome",
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "alunos",
          "email",
          {
            type: Sequelize.STRING,
            allowNull: false,
            // Unico no bd
            unique: true,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "alunos",
          "idade",
          {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "alunos",
          "peso",
          {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "alunos",
          "altura",
          {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: () => {},
};
