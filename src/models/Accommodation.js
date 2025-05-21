

  // models/User.js
  import mongoose from "mongoose"; 

  const AccommodationSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    roomType: String,
    price: Number,
    size: String,
    description: String,

  });
  
  export default mongoose.models.Accommodation || mongoose.model("Accommodation", AccommodationSchema);
  