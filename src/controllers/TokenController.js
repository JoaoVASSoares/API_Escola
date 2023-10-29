// Estamos importando o user pois estamos usando para validação
import User from "../models/User";

// Importando JWT
import jwt from "jsonwebtoken";

class TokenController {
  // Criação do método index para enviar um requisição utilizando json
  async create(req, res) {
    // Estamos recebendo do usuário um email e uma senha. Através do body
    const { email = "", password = "" } = req.body;

    // Estamos verificando se foi enviado os dois
    if (!email || !password) {
      return res.status(404).json({
        errors: ["Credenciais inválidas"],
      });
    }

    // Estamos buscando no banco UM usuário ONDE ele tem o email igual ao enviado!
    const user = await User.findOne({ where: { email: email } });

    // Estamos verificando se foi o usuário existe
    if (!user) {
      return res.status(404).json({
        errors: ["Usuário não existe"],
      });
    }

    // Estamos verificando se a anha é valida
    if (!(await user.passwordIsValid(password))) {
      return res.status(400).json({
        errors: ["Senha inválida"],
      });
    }

    const id = user.id;
    // Estamos gerando o token
    /*
      no sign:
      1º estamos passando o playload (é o que iremos recuperar do usuário posteriormente)
      2º estamos passando o secret la do env criado por mim
      3º estamos passando o tempo de expiração do token.
    */
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    // Estamos devolvendo este token
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

// exportando a class instanciada
export default new TokenController();
