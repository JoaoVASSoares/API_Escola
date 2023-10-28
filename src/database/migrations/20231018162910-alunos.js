// MIGRAÇÕES SÃO ALTERAÇÕES DIRETAS NA BASE DE DADOS -> Referente a ciração da tabela no bd
// Estamos criando a tabela aluno
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Criando a tablea Alunos
    return queryInterface.createTable("alunos", {
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
      // Campo sobrenome
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Campo email
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Campo idade
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      // Campo peso
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      // Campo altura
      altura: {
        type: Sequelize.FLOAT,
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
    return queryInterface.dropTable("alunos");
  },
};
