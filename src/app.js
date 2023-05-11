import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import bodyParser from "body-parser";
import todoListRouter from "./routs/list-router.js";
import cors from "cors";
dotenv.config();

connect();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.get("/api", (ewq, res) => {
  return res.status(200).json({ message: "app works well!" });
});
console.log(`"print:" ${todoListRouter.addTodoList}`);
app.use("/api", cors(), todoListRouter);

app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3000);
