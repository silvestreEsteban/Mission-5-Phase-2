import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const dbUri = "mongodb://127.0.0.1:27017/tradeMeMockData";
mongoose
  .connect(dbUri, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const carouselSchema = new mongoose.Schema({
  image: String,
});
const Carousel = mongoose.model("Carousel", carouselSchema);

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

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/carouselImages", async (req, res) => {
  Carousel.find()
    .then((results) => {
      console.log("Fetched data from Carousel collection", results);
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
      console.log(
        "Fetched the data from the Listing collection in your local MongoDB instance",
        results
      );
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

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
