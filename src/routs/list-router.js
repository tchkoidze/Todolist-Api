import express from "express";
import {
  addTodoList,
  deleteTodolist,
  getAllTodoList,
  updateTodolist,
} from "../controllers/list-controller.js";

const todoListRouter = express.Router();

todoListRouter.post("/todo/add", addTodoList);
todoListRouter.get("/todo", getAllTodoList);
todoListRouter.put("/update", updateTodolist);
todoListRouter.delete("/delete", deleteTodolist);

export default todoListRouter;
