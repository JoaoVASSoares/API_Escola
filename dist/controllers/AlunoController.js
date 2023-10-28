"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Importando model de alunos
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

// Importando o model de fotos
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  // Criação do método index para enviar um requisição utilizando json
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        // Atributos a serem exibidos
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        // Qual o campo iremos pegar para ordenção e se queremos "ASC" -> Crescente ou "DESC" -> decrescente
        order: [
          ["id", "ASC"],
          [_Foto2.default, "id", "DESC"],
        ],
        // Incluindo as fotos na exibição
        include: {
          model: _Foto2.default,
          attributes: ["id", "originalname", "filename", "url"],
        },
      });
      res.json(alunos);
    } catch (e) {
      return res.json(null);
    }
  }

  async create(req, res) {
    try {
      // Estamos recebendo os dados teoricamente do front. Esta vindo pelo req.body
      const novoAluno = await _Aluno2.default.create(req.body);
      // Estamos fazendo a desestruturação para retornar apenas os campos selecionado
      const { id, nome, sobrenome, email, idade, peso, altura } = novoAluno;
      return res.json({ id, nome, sobrenome, email, idade, peso, altura });
    } catch (e) {
      // Estamos devolvendo o erro com o código 400 e fazendo um map para percorrer todo array de erros
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Show -> Retorna somente um usuário da base de dados (utiliza o id como parametro)
  async show(req, res) {
    try {
      const id = req.params.id;

      // Estamos validando o id
      if (!id) {
        return res.status(400).json({
          errors: "Id inválido",
        });
      }
      // Esta buscando o usuario pelo id que é uma chave primaria (pk)
      const aluno = await _Aluno2.default.findByPk(id, {
        // Atributos a serem exibidos
        attributes: [
          "id",
          "nome",
          "sobrenome",
          "email",
          "idade",
          "peso",
          "altura",
        ],
        // Qual o campo iremos pegar para ordenção e se queremos "ASC" -> Crescente ou "DESC" -> decrescente
        order: [
          ["id", "ASC"],
          [_Foto2.default, "id", "DESC"],
        ],
        // Incluindo as fotos na exibição
        include: {
          model: _Foto2.default,
          attributes: ["id", "originalname", "filename", "url"],
        },
      });

      // Estamos validando o aluno
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;

      // Estamos validando o id
      if (!id) {
        return res.status(400).json({
          errors: "Id inválido",
        });
      }
      // Esta buscando o usuario pelo id que é uma chave primaria (pk)
      const aluno = await _Aluno2.default.findByPk(id);

      // Estamos validando o aluno
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      // Esta fazendo o update com o body passado nos parametros
      const alunoAtualizado = await aluno.update(req.body);

      // Estamos retornando o auluno já atualizado
      return res.json(alunoAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      // Estamos validando o id
      if (!id) {
        return res.status(400).json({
          errors: "Id inválido",
        });
      }
      // Esta buscando o usuario pelo id que é uma chave primaria (pk)
      const aluno = await _Aluno2.default.findByPk(id);

      // Estamos validando o aluno
      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existe"],
        });
      }

      // Estamos deletando o aluno
      await aluno.destroy();

      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

// exportando a class instanciada
exports. default = new AlunoController();
