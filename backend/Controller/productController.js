import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import mongoose from "mongoose";

import Item from "../cli/model.js";

mongoose.connect("mongodb://localhost:27017/tradeMeMockData");
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const itemReserve = (req, res) => {
  try {
    const itemReserveText = req.params.title;
    Item.find().then(function (items) {
      res.json(items);
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export {itemReserve};
