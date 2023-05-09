import express from "express";
import { addTodoList, getAllTodoList } from "../controllers/list-controller.js";

const todoListRouter = express.Router();

todoListRouter.post("/add", addTodoList);
todoListRouter.get("/todo", getAllTodoList);

export default todoListRouter;
