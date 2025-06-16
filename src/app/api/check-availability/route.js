import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Accommodation from "@/models/Accommodation";
import Booking from "@/models/Booking";
import mongoose, { Types } from "mongoose";

// GET method: For checking availability via URL params
export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const hotelId = searchParams.get("hotelId");
  const checkIn = new Date(searchParams.get("checkIn"));
  const checkOut = new Date(searchParams.get("checkOut"));

  if (!hotelId || !checkIn || !checkOut) {
    return NextResponse.json(
      { success: false, error: "Missing parameters" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const allRooms = await Accommodation.find({
      hotelId: new mongoose.Types.ObjectId(hotelId),
    });

    const overlappingBookings = await Booking.find({
      hotelId: new mongoose.Types.ObjectId(hotelId),
      check_in: { $lt: checkOut },
      check_out: { $gt: checkIn },
    });

    const bookedRoomIds = overlappingBookings.map((b) => b.roomId.toString());

    const availableRooms = allRooms.filter(
      (room) => !bookedRoomIds.includes(room._id.toString())
    );

    return NextResponse.json({ success: true, data: availableRooms });
  } catch (error) {
    console.error("GET Error fetching available rooms:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}

// POST method: For checking availability via JSON body
export async function POST(req) {
  try {
    const { hotelId, checkIn, checkOut } = await req.json();

    if (!hotelId || !checkIn || !checkOut) {
      return NextResponse.json(
        { success: false, error: "Missing parameters" },
        { status: 400 }
      );
    }

    await connectDB();

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const objectHotelId = Types.ObjectId.createFromHexString(hotelId); // ✅ No warning

    const allRooms = await Accommodation.find({
      hotelId: objectHotelId,
    });

    const overlappingBookings = await Booking.find({
      hotelId: objectHotelId,
      check_in: { $lt: checkOutDate },
      check_out: { $gt: checkInDate },
    });

    const bookedRoomIds = overlappingBookings.map((b) => b.roomId.toString());

    const availableRooms = allRooms.filter(
      (room) => !bookedRoomIds.includes(room._id.toString())
    );

    return NextResponse.json({ success: true, availableRooms });
  } catch (error) {
    console.error("POST Error checking availability:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
