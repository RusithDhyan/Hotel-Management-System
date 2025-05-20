// models/User.js
import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  
});

export default mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
