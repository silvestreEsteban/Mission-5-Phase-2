#! /usr/bin/env node
import mongoose from "mongoose";
import { Command } from "commander";
import Listing from "../model.js";

const seedData = [
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2153395582.jpg",
    title: "Sofa Bed",
    location: "Orewa, Auckland",
    condition: "Used",
    size: "2-Seater",
    price: 166,
    colour: "Blue",
    dimensions: "160 x 56 cm",
  },
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2137847533.jpg",
    title: "Sofa Bed",
    location: "Birkdale, Auckland",
    condition: "Used - some wear",
    size: "2-Seater",
    price: 180,
    colour: "Brown",
    dimensions: "150 x 60 cm",
  },
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2152119890.jpg",
    title: "Sofa Bed",
    location: "Belmont, Auckland",
    condition: "Used, Great condition",
    size: "3-Seater",
    price: 360,
    colour: "Blue",
    dimensions: "160 x 56 cm",
  },
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2153383586.jpg",
    title: "Sofa Bed",
    location: "Grey Lynn, Auckland",
    condition: "Used, Good Condition",
    size: "2-Seater",
    price: 220,
    colour: "Grey",
    dimensions: "170 x 60 cm",
  },
];

const mongoURI = "mongodb://127.0.0.1/tradeMeMockData";
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {});
const program = new Command();
program.version("1.0.0").description("CLI for TradeMe Mock Data");

const addSeedData = () => {
  Listing.insertMany(seedData).then(() => {
    console.log("Seed data added successfully");
    mongoose.connection.close();
  });
};

export default addSeedData;
