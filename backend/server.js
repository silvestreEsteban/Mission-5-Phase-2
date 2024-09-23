import * as dotenv from 'dotenv';
import cors from 'cors';

import express from 'express'
import productRouter from "./Router/productRouter.js";
dotenv.config();


const app = express();

app.listen(process.env.API_PORT, () => {
  console.log("Server Started");
});


// Middleware
app.use(cors());
app.use(express.json());

app.use(productRouter);
