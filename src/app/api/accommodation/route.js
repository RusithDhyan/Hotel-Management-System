// app/api/accommodation/route.js
import { NextResponse } from "next/server";
import Accommodation from "@/models/Accommodation"; // Your Mongoose model
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  if (!hotelId) {
    return NextResponse.json({ error: "Missing hotelId" }, { status: 400 });
  }

  try {
    await connectDB();
    const accommodations = await Accommodation.find({
      hotelId: new mongoose.Types.ObjectId(hotelId),
    });
        return NextResponse.json(accommodations); // ✅ must return an array
  } catch (error) {
    console.error("GET /api/accommodation error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}


export async function POST(req) {
  const formData = await req.formData();
  const hotelId = formData.get("hotelId");
  const room_type = formData.get("room_type");
  const price = formData.get("price");
  const size = formData.get("size");
  const description = formData.get("description"); 
  const image = formData.get("image");

  let base64Image = "";

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newAccommodation = await Accommodation.create({
      hotelId,
      room_type,
      price,
      size,
      description,
      image: base64Image,
    });
    return Response.json({ success: true, data: newAccommodation });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
