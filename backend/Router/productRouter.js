import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
const productRouter = express.Router();

import * as productController from "../Controller/productController.js";

productRouter.get("/api/getProductsForReserve", productController.itemReserve);

export default productRouter;