import mongoose from "mongoose";

const schema = new mongoose.Schema({
  image: String,
  title: String,
  location: String,
  condition: String,
  size: String,
  price: Number,
  colour: String,
  dimensions: String,
});

export default mongoose.model("Listing", schema);
