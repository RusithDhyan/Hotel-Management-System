import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Hotel from "@/models/Hotel";
import Gallery from "@/models/Gallery";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  if (!hotelId) {
    return NextResponse.json(
      { success: false, error: "Missing hotelId" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    // Fetch both hotel name and gallery in one go
    const hotel = await Hotel.findById(hotelId).lean();
    const gallery = await Gallery.findOne({ hotelId }).lean();

    if (!hotel || !gallery) {
      return NextResponse.json(
        { success: false, error: "Hotel or Gallery not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        hotelName: hotel.title,
        images: gallery.image_slider,
      },
    });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
