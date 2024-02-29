import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongoURL = process.env.MONGODBCONNECTIONSTRING;
const CONNECTDB = async () => {
  const connection = await mongoose.connect(mongoURL);
  console.log("connected to the mongoose");
  return connection;
};
export default CONNECTDB;
