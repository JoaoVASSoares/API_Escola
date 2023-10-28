module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.changeColumn(
          "users",
          "nome",
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "users",
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
          "users",
          "password_hash",
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "users",
          "created_at",
          {
            type: Sequelize.DATE,
            allowNull: false,
          },
          { transaction: t }
        ),
        queryInterface.changeColumn(
          "users",
          "updated_at",
          {
            type: Sequelize.DATE,
            allowNull: false,
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: () => {},
};
