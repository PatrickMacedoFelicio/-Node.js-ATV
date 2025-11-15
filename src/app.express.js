import "dotenv/config";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// healthcheck
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime()
  });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Express em http://localhost:${port}`);
});
