class HomeController {
  // Criação do método index para enviar um requisição utilizando json
  async index(req, res) {
    res.json("Index");
  }
}

// exportando a class instanciada
export default new HomeController();
