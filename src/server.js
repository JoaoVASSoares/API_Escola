// Importando o app
import app from "./app";

const port = process.env.APP_PORT;
// Fazendo o app escutar em uma porta
app.listen(port, () => {
  console.log();
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
