import mongoose from "mongoose";

const { Schema } = mongoose;

const todolistSchema = new Schema({
  id: {
    type: Schema.Types.Number,
    required: true,
  },
  todo: {
    type: Schema.Types.String,
    required: true,
  },
  done: {
    type: Schema.Types.Boolean,
    required: true,
  },
});

const Todolist = mongoose.model("Todolist", todolistSchema);

export default Todolist;
