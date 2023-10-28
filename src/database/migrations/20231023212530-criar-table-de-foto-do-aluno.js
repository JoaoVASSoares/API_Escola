// MIGRAÇÕES SÃO ALTERAÇÕES DIRETAS NA BASE DE DADOS -> Referente a ciração da tabela no bd
// Estamos criando a tabela user
module.exports = {
  up: (queryInterface, Sequelize) => {
    // Criando a tablea photos
    return queryInterface.createTable("photos", {
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
      // Campo nome original
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Campo nome do arquivo novo
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // Id do aluno na tebela usuário
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Relacionamento de tabela
        references: {
          // Qual tabela
          model: "alunos",
          // Qual campo
          key: "id",
        },
        // O que acontece se eu deletar o aluno.
        // CASCADE -> tudo que acontecer com o aluno acontece aqui também
        // SET NULL -> O campo ficar null caso delete o aluno
        // RESTRICT -> Qualquer tentativa seja de delet ou upd ira falar e lançar um erro
        // NO ACTION -> O SQL não ira fazer nda para vc, porem vc não consegue nem apagar nem autalizar o registro pai
        // alem de não poder fazer alterações no registro filho caso o registro pai nn tenha sido feito ainda
        onDelete: "CASCADE",
        // O que acontece se eu fazer update
        // CASCADE -> tudo que acontecer com o aluno acontece aqui também
        // SET NULL -> O campo ficar null caso delete o aluno
        // RESTRICT -> Qualquer tentativa seja de delet ou upd ira falar e lançar um erro
        // NO ACTION -> O SQL não ira fazer nda para vc, porem vc não consegue nem apagar nem autalizar o registro pai
        // alem de não poder fazer alterações no registro filho caso o registro pai nn tenha sido feito ainda
        onUpdate: "CASCADE",
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
    return queryInterface.dropTable("photos");
  },
};
