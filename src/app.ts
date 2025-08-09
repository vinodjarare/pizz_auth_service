import express from "express";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to auth service");
});

app.use(globalErrorHandler);

export default app;
