import mongoose from "mongoose";

const OfferSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
  offer_type: String,
  title: String,
  description: String,
  image: String,

});

export default mongoose.models.Offer ||
  mongoose.model("Offer", OfferSchema);
