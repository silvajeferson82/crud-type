import express from "express";

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`App ${process.env.PROJECT_NAME} rodando em ${process.env.PORT}`);
});
