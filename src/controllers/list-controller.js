import Todolist from "../models/TodoList.js";

export const getAllTodoList = async (req, res) => {
  const data = await Todolist.find();

  return res.status(200).json(data);
};

export const addTodoList = async (req, res) => {
  const { body } = req;

  const lastTodo = await Todolist.find().sort({ _id: -1 }).limit(1);

  const id = lastTodo.length > 0 ? lastTodo[0].id + 1 : 1;

  const newTodoList = {
    id: id,
    todo: body.todo,
    done: body.done,
  };
  await TodoList.create({ ...newTodoList });

  return res.status(200).json({ ...newTodoList });
};

export const updateTodolist = async (req, res) => {
  const { body } = req;

  await Feedback.findOneAndUpdate(
    { id: body.id },
    {
      done: body.done,
    }
  );

  return res.status(200).json({ message: "todo list updated successfully" });
};

//export const deleteTodolist = async (req, res) => {};
