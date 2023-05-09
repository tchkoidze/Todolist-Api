import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import bodyParser from "body-parser";
import todoListRouter from "./routs/list-router.js";
dotenv.config();

connect();

const app = express();

app.use(bodyParser.json());

app.get("/api", (ewq, res) => {
  return res.status(200).json({ message: "app works well!" });
});

app.use("/api", todoListRouter);

app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
