import express, { Request, Response } from "express";
import runMigrations from "../db/migrations/";
import {create, all, one} from "./queries";

const app = express();
app.use(express.json());
const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript and Express!!!");
});

app.post("/", async (req: Request, res: Response) => {
  const result = await create(req.body);
  res.status(201).json(result);
});

app.get("/all", async (req: Request, res: Response) => {
  const result = await all();
  res.json(result);
});

app.get("/:id", async (req: Request, res: Response) => {
  const result = await one(req.params.id);
  res.json(result);
});

async function start() {
  await runMigrations();
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

start();
