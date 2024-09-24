#! /usr/bin/env node
import mongoose from "mongoose";
import { Command } from "commander";
import Listing from "./model.js";
import Carousel from "./carouselModel.js";
import seedCarouselData from "./seed/seedCarousel.js";
import User from "./seed/userModel.js";

const mongoURI = "mongodb://127.0.0.1/tradeMeMockData";
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, {});
const program = new Command();
program.version("1.0.0").description("CLI for TradeMe Mock Data");

const addListing = (listing) => {
  Listing.create(listing).then((listing) => {
    console.log("Listing added successfully");
    mongoose.connection.close();
  });
};

const updateListing = (_id, listing) => {
  Listing.findByIdAndUpdate({ _id }, listing).then(() => {
    console.log("Listing updated successfully");
    mongoose.connection.close();
  });
};

const updatePriceInDatabase = (_id, price) => {
  Listing.findByIdAndUpdate({ _id }, { $set: { price: price } })
    .then(() => {
      console.log("Price updated successfully");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(`Failed to update the price: ${err}`);
      mongoose.connection.close();
    });
};

const findListing = (title) => {
  const search = new RegExp(title, "i");
  Listing.find({ $or: [{ title: search }] }).then((listing) => {
    console.log(listing);
    mongoose.connection.close();
  });
};

const addCarouselSeedData = () => {
  Carousel.insertMany(seedCarouselData).then(() => {
    console.log("Carousel seed data added successfully");
    mongoose.connection.close();
  });
};

const addUserSeedData = () => {
  User.insertMany(seedUserData).then(() => {
    console.log("User seed data added successfully");
    mongoose.connection.close();
  });
};

export {
  addListing,
  updateListing,
  updatePriceInDatabase,
  findListing,
  addCarouselSeedData,
};
