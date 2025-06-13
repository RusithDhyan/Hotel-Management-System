// models/User.js
import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema({
  type: String,
  title: String,
  description: String,
  main_title: String,
  main_description: String,
  body_title: String,
  body_description: String,
  image: String,
  image_slider: [String],

  
});

export default mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);
