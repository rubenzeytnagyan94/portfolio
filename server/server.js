import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => res.json({ status: "ok", message: "Pontos API is alive" }));

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: "Բոլոր դաշտերը պարտադիր են" });
  const file = path.join(__dirname, "messages.json");
  let messages = [];
  if (fs.existsSync(file)) messages = JSON.parse(fs.readFileSync(file, "utf8"));
  messages.push({ name, email, message, date: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(messages, null, 2));
  res.json({ success: true, message: "Հաղորդագրությունը ստացվել է" });
});

app.listen(PORT, () => console.log(`Pontos API running: http://localhost:${PORT}`));
