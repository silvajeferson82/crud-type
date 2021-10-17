import express, { json } from "express";
import { db } from "./config/database";
import { router } from "./routes/routes";

const app = express();
app.use(json());
app.use(router);

app.listen(process.env.PORT, async () => {
  await db.sync();
  console.log(`App ${process.env.PROJECT_NAME} rodando em ${process.env.PORT}`);
});
