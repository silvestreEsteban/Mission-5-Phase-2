#! /usr/bin/env node
import mongoose from "mongoose";
import { Command } from "commander";
import Listing from "../model.js";

const seedCarouselData = [
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2153395582.jpg",
  },
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2153395594.jpg",
  },
  {
    image: "https://trademe.tmcdn.co.nz/photoserver/plus/2153395603.jpg",
  },
];

export default seedCarouselData;
