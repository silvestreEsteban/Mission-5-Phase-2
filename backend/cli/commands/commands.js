#! /usr/bin/env node

import { Command } from "commander";
import Listing from "../model.js";
import User from "../seed/userModel.js";
import mongoose, { mongo } from "mongoose";
import inquirer from "inquirer";
import axios from "axios";
import {
  addListing,
  updateListing,
  findListing,
  updatePriceInDatabase,
  addCarouselSeedData,
} from "../index.js";
import addSeedData from "../seed/seed.js";

// creating a prompt that will ask the user for each listing property when add command is used
const prompt = inquirer.createPromptModule();
const questions = [
  {
    type: "input",
    name: "image",
    message: "Enter the image URL of the listing",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of the listing",
  },
  {
    type: "input",
    name: "location",
    message: "Enter the location of the listing",
  },
  {
    type: "input",
    name: "condition",
    message: "Enter the condition of the listing",
  },
  {
    type: "input",
    name: "size",
    message: "Enter the size of the listing",
  },
  {
    type: "input",
    name: "price",
    message: "Enter the price of the listing",
  },
  {
    type: "input",
    name: "colour",
    message: "Enter the colour of the listing",
  },
  {
    type: "input",
    name: "dimensions",
    message: "Enter the dimensions of the listing",
  },
];

const program = new Command();
program.version("1.0.0").description("CLI for TradeMe Mock Data");

program
  .command("add")
  .alias("a")
  .description("Add a listing")
  .option("-t, --title <title>", "Title of the listing")
  .option("-l, --location <location>", "Location of the listing")
  .option("-c, --condition <condition>", "Condition of the listing")
  .option("-s, --size <size>", "Size of the listing")
  .option("-p, --price <price>", "Price of the listing")
  .option("-co, --colour <colour>", "Colour of the listing")
  .option("-d, --dimensions <dimensions>", "Dimensions of the listing")
  .action(() => {
    prompt(questions).then((answers) => {
      addListing(answers);
    });
  });

const updateQuestions = [
  {
    type: "input",
    name: "price",
    message: "Enter the new price of the listing",
  },
];
program
  .command("updatePrice <id>")
  .alias("up")
  .description("Update a listings price for bidding purposes")
  .action((id) => {
    prompt(updateQuestions).then((answers) => {
      axios
        .post("http://localhost:4000/api/updateBiddingPrice", {
          id: id,
          newPrice: answers.price,
        })
        .then((response) => {
          console.log("Listing updated successfully:", response.data);
        })
        .catch((error) => {
          console.error(
            "Error updating listing:",
            error.response ? error.response.data : error.message
          );
        });
    });
  });

program
  .command("update <id>")
  .alias("u")
  .description("Update a listing")
  .option("-t, --title <title>", "Title of the listing")
  .option("-l, --location <location>", "Location of the listing")
  .option("-c, --condition <condition>", "Condition of the listing")
  .option("-s, --size <size>", "Size of the listing")
  .option("-p, --price <price>", "Price of the listing")
  .option("-co, --colour <colour>", "Colour of the listing")
  .option("-d, --dimensions <dimensions>", "Dimensions of the listing")
  .action((id) => {
    prompt(questions).then((answers) => {
      updateListing(id, answers);
    });
  });

program
  .command("find <title>")
  .alias("f")
  .description("Find a listing")
  .action(findListing);

program
  .command("seed")
  .alias("s")
  .description("Seed the database")
  .action(addSeedData);

program
  .command("seedCarousel")
  .alias("sc")
  .description("Seed the carousel database")
  .action(addCarouselSeedData);

// user data seeding

const userInfo = [
  {
    username: "rick_557",
    feedback: 100,
    location: "Orewa, Auckland",
  },
];

program
  .command("seedUser")
  .alias("su")
  .description("Seed the user database")
  .action(() => {
    User.insertMany(userInfo).then(() => {
      console.log("User seed data added successfully");
      mongoose.connection.close();
    });
  });

program.parse(process.argv);
