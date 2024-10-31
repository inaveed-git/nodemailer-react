import mongoose from "mongoose";

let connectDb = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URL}${process.env.DB_NAME}`);
    console.log("Database connected");
  } catch (error) {
    console.log("some error occur");
  }
};

export default connectDb;
