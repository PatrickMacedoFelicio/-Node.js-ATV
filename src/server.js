import express from "express";

const app = express();
const port = 3000;

// endpoint solicitado
app.get("/hello", (req, res) => {
  res.json({
    message: "API REST com Node.js funcionando!"
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
