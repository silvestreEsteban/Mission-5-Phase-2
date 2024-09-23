import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import productRouter from "../Router/productRouter.js";
dotenv.config();

const app = express();
const PORT = process.env.API_PORT

app.use(cors());
app.use(express.json());



app.use(productRouter);


app.listen(PORT, () => {
    console.log(`jyothy Server running  at http://localhost:${PORT}`)
});