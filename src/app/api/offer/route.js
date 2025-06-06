// app/api/accommodation/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Offer from "@/models/Offer";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  try {
    await connectDB();

    if (hotelId) {
      const offers = await Offer.find({
        hotelId: new mongoose.Types.ObjectId(hotelId),
      });
      return NextResponse.json({ success: true, data: offers });
    } else {
      const offers = await Offer.find({});
      return NextResponse.json({ success: true, data: offers });
    }
  } catch (error) {
    console.error("GET /api/offer error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const hotelId = formData.get("hotelId");
  const offer_type = formData.get("offer_type");
  const title = formData.get("title");
  const description = formData.get("description"); 
  const image = formData.get("image");

  let base64Image = "";

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }
  
  try {
    await connectDB();
    const newOffer = await Offer.create({
      hotelId,
      offer_type,
      title,
      description,
      image: base64Image,
    });
    return NextResponse.json({ success: true, data: newOffer });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
