import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import productRouter from "../Router/productRouter.js";
dotenv.config();

const app = express();
const PORT = 3000
const mongoURI = "mongodb://localhost:27017/tradeMeMockData";

console.log("Mongo Uri", mongoURI)


mongoose.connect(mongoURI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

app.use(cors());
app.use(express.json());

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

  const Listing = mongoose.model("Listing", schema);

  app.get("/api/listing", async (req, res) => {
    try {
        const listings = await Listing.find().limit(1);
        res.status(200).json(listings);
    }catch (error) {
        res.status(500).json({message: "Error getting listings", error});
    }
  });

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});

app.get("/api/listing/:id", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Error finding listing", error });
  }
});