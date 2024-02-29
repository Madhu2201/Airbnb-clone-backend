import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRouter from "./Router/Router.js";
import CONNECTDB from "./Database/db.config.js";
const app = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
CONNECTDB();
app.use("/api", ProductRouter);
app.listen(port,()=>{
    console.log("my app is running",port);
})