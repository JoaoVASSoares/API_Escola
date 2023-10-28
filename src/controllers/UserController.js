import User from "../models/User";

class UserController {
  // Criação do método create para enviar um requisição de criação utilizando json
  async create(req, res) {
    // Envolvemos em um try catch para capturar os erros
    try {
      // Estamos recebendo os dados teoricamente do front. Esta vindo pelo req.body
      const novoUser = await User.create(req.body);
      // Estamos fazendo a desestruturação para retornar apenas os campos selecionado
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      // Estamos devolvendo o erro com o código 400 e fazendo um map para percorrer todo array de erros
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Sempre que criamos métodos para trabalhar na base de dados precisamos do async e await, pois sempre temos promisses,
  // como resposta da requisição

  // Index -> Retorna todos os usuários na base de dados
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show -> Retorna somente um usuário da base de dados (utiliza o id como parametro)
  async show(req, res) {
    try {
      // Esta buscando o usuario pelo id que é uma chave primaria (pk )
      const user = await User.findByPk(req.params.id);

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      // Esta buscando o usuario pelo id que é uma chave primaria (pk)
      const user = await User.findByPk(req.userId);

      // Validação para ganantir que o usuário existe
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      // Esta fazendo o update com o body passado nos parametros
      const userAtualizado = await user.update(req.body);

      // Estamos fazendo a desestruturação para retornar apenas os campos selecionado
      const { id, nome, email } = userAtualizado;

      return res.json({ id, nome, email });
    } catch (e) {
      // Estamos devolvendo o erro com o código 400 e fazendo um map para percorrer todo array de erros
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      // Esta buscando o usuario pelo id que é uma chave primaria (pk )
      const user = await User.findByPk(req.userId);

      // Validação para ganantir que o usuário existe
      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe"],
        });
      }

      // Esta fazendo o update com o body passado nos parametros
      await user.destroy();

      return res.json("Usuário deletado com sucesso!");
    } catch (e) {
      // Estamos devolvendo o erro com o código 400 e fazendo um map para percorrer todo array de erros
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// exportando a class instanciada
export default new UserController();
