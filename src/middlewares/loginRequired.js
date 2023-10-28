// importamos o jwt
import jwt from "jsonwebtoken";

// importamos o user
import User from "../models/User";

// Estamos exportando esta função anonima pois não temos inteção de utilizar ela aqui
export default async (req, res, next) => {
  // O headers é um objeto com varios conteúdos. Fazemos a desestruturação deste objeto e pegamos somente a authorization.
  // é nela que contém o Bearer (token)
  const { authorization } = req.headers;

  // Verificamos se a authorization foi recebida se não pedimos para fazer login
  if (!authorization) {
    return res.status(401).json({
      errors: ["Login requerido"],
    });
  }

  // Fazemos a separação do token utilizando a função split
  const [, token] = authorization.split(" ");

  try {
    // Aqui faz a verificação do token. O segundo processo é a senha do .env para desemcriptar
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    // recebemos neste dado o playload
    const { id, email } = dados;

    // Estamos buscando um usuário onde o id e o email é o mesmo passado no token
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });
    // é utilizado para caso seja feito autalização do email seja necessário fazer login novamente
    if (!user) {
      return res.status(400).json({
        errors: ["Usuário inválido. Faça login novamente!"],
      });
    }

    // podemos utilizar o playload da seguintes forma:
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    // Caso não recebemos os dados o token estar ou expirado ou inválido
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
