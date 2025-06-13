import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  roomType: String, // you can keep this for display
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: "Accommodation" }, // NEW
  checkIn: Date,
  checkOut: Date,
  guests: Number,
  specialRequests: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.models.Booking ||
  mongoose.model("Booking", bookingSchema);
