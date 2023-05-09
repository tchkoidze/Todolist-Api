import mongoose from "mongoose";

const connect = () => {
  const url = process.env.MONGO_URL;
  try {
    mongoose.connect(url);
  } catch (error) {}
};

export default connect;
