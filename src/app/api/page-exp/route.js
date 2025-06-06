// app/api/accommodation/route.js
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import PageExp from "@/models/PageExp";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  if (!hotelId) {
    return NextResponse.json({ success: false, error: "Missing hotelId" }, { status: 400 });
  }

  try {
    await connectDB();

    const experience = await PageExp.find({
      hotelId: new mongoose.Types.ObjectId(hotelId),
    });

    return NextResponse.json({ success: true, data: experience }); // ✅ wrapped in success/data
  } catch (error) {
    console.error("GET /api/page-exp error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const hotelId = formData.get("selectedHotelId");
  const image_right = formData.get("image_right");
  const description_right = formData.get("description_right");
  const image_left = formData.get("image_left");
  const description_left = formData.get("description_left");

  let base64Image = "";
  let base64Image1 = "";

  if (image_right && typeof image_right === "object") {
    const buffer = Buffer.from(await image_right.arrayBuffer());
    base64Image = `data:${image_right.type};base64,${buffer.toString("base64")}`;
  }
  if (image_left && typeof image_left === "object") {
    const buffer = Buffer.from(await image_left.arrayBuffer());
    base64Image1 = `data:${image_left.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newPageExp = await PageExp.create({
      hotelId,
      image_right:base64Image,
      description_right,
      image_left:base64Image1,
      description_left,
    
    });
    return NextResponse.json({ success: true, data: newPageExp });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
