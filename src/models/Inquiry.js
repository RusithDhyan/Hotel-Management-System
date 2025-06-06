import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
   hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
  name: String,
  email: String,
  phone: String,
  check_in: {
    type: Date,
    required: true,
  },
  check_out: {
    type: Date,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  inquiry_type: String,
  hotel: String,
  room_type: String,
  message: String,

});

export default mongoose.models.Inquiry ||
  mongoose.model("Inquiry", InquirySchema);
