// models/User.js
import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  title: String,
  location:String,
  description: String,
  image: String,
  
});

export default mongoose.models.Hotel || mongoose.model("Hotel", HotelSchema);
