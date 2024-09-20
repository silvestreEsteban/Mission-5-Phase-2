import mongoose from "mongoose";

const carouselSchema = new mongoose.Schema({
  image: String,
});

export default mongoose.model("Carousel", carouselSchema);
