import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Hotel from "@/models/Hotel";
import PageOffer from "@/models/Offer";

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
    const offer = await PageOffer.findOne({ hotelId }).lean();

    if (!hotel || !offer) {
      return NextResponse.json(
        { success: false, error: "Hotel or Offer not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        hotelName: hotel.title,
        Id:offer._id,
        offerType: offer.offer_type,
      },
    });
  } catch (error) {
    console.error("Offer fetch error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
