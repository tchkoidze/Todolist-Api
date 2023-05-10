import Todolist from "../models/TodoList.js";
import { v4 as uuidv4 } from "uuid";

export const getAllTodoList = async (req, res) => {
  const data = await Todolist.find();

  return res.status(200).json(data);
};

export const addTodoList = async (req, res) => {
  const { body } = req;

  const id = uuidv4();

  const newTodoList = {
    id: id,
    todo: body.todo,
    done: body.done,
  };
  await Todolist.create({ ...newTodoList });

  return res.status(201).json({ ...newTodoList });
};

export const updateTodolist = async (req, res) => {
  try {
    const { body } = req;

    await Todolist.findOneAndUpdate(
      { id: req.params.id },
      {
        done: body.done,
      }
    );
    console.log(555);
    return res.status(200).json({ message: "todo list updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodolist = async (req, res) => {
  await Todolist.findOneAndDelete({ id: req.params.id });

  return res.status(200).json({ message: "todo list deleted successfully" });
};
