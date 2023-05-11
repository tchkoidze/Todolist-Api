import express from "express";
import {
  addTodoList,
  deleteTodolist,
  getAllTodoList,
  updateTodolist,
} from "../controllers/list-controller.js";

const todoListRouter = express.Router();
//console.log(deleteTodolist());
todoListRouter.post("/todo/add", addTodoList);
console.log("worcks");

todoListRouter.get("/todo", getAllTodoList);
todoListRouter.put("/update/:id", updateTodolist);
todoListRouter.delete("/delete/:id", deleteTodolist);

export default todoListRouter;
