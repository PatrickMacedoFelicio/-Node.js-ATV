import express from "express";
import products from "./src/routes/products.js";

const app = express();

app.use(express.json());

// rota de produtos
app.use("/products", products);

// rota padrão
app.get("/", (req, res) => {
  res.json({ message: "API Express Online" });
});

app.listen(3000, () => {
  console.log("Express rodando em http://localhost:3000");
});
