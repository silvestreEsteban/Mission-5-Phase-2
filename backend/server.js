import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import productRouter from "../Router/productRouter.js";
dotenv.config();

const app = express();
const PORT = 3000;
const mongoURI = "mongodb://localhost:27017/tradeMeMockData";

console.log("Mongo Uri", mongoURI);

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

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

const Listings = mongoose.model("Listing", schema);

app.get("/api/listing", async (req, res) => {
  try {
    const listings = await Listings.find().limit(1);
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ message: "Error getting listings", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/api/listing/:id", async (req, res) => {
  try {
    const listing = await Listings.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: "Error finding listing", error });
  }
});

// const dbUri = "mongodb://127.0.0.1:27017/tradeMeMockData";
// mongoose
//   .connect(dbUri, {})
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

const carouselSchema = new mongoose.Schema({
  image: String,
});
const Carousel = mongoose.model("Carousel", carouselSchema);

// const schema1 = new mongoose.Schema({
//   image: String,
//   title: String,
//   location: String,
//   condition: String,
//   size: String,
//   price: Number,
//   colour: String,
//   dimensions: String,
// });

const Listing = mongoose.model("Listing", schema);

// const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/carouselImages", async (req, res) => {
  Carousel.find()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.log(
        "There was an error fetching data from the Carousel collection in your local MongoDB instance",
        error
      );
      res
        .status(500)
        .json(
          "There was an error fetching data from the Carousel collection in your local MongoDB instance"
        );
    });
});

app.get("/api/listingInfo", (req, res) => {
  Listing.find()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.log(
        "There was an error fetching data from the listing collection in your local MongoDB instance",
        error
      );
      res
        .status(500)
        .json(
          "There was an error fetching data from the listing collection in your local MongoDB instance"
        );
    });
});

app.post("/api/updateBiddingPrice", (req, res) => {
  const { id, newPrice } = req.body;
  if (!id || !newPrice) {
    return res.status(400).json("Missing required fields");
  }
  Listing.findByIdAndUpdate(
    id,
    { $set: { price: newPrice } },
    { new: true, useFindAndModify: false }
  )
    .then((updatedListing) => {
      if (!updatedListing) {
        return res.status(404).json({ error: "Listing not found" });
      }
      res.json(updatedListing);
    })
    .catch((error) => {
      console.log("There was an error updating the listing price", error);
      res.status(500).json("There was an error updating the listing price");
    });
});

const User = mongoose.model("User", {
  username: String,
  location: String,
  feedback: Number,
});

app.get("/api/userInfo", (req, res) => {
  User.find().then((results) => {
    res.json(results);
  });
});
