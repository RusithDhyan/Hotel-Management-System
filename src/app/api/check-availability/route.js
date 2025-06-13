import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Booking from "@/models/Booking";
import Accommodation from "@/models/Accommodation";

export async function POST(req) {
  try {
    const { hotelId, checkIn, checkOut } = await req.json();

    if (!hotelId || !checkIn || !checkOut) {
      return NextResponse.json({ success: false, message: "Missing data" });
    }

    await connectDB();

    // Step 1: Get all accommodations for the selected hotel
    const allRooms = await Accommodation.find({ hotelId });

    // Step 2: Get existing bookings with date overlap
    const existingBookings = await Booking.find({
      hotel: hotelId,
      $or: [
        {
          checkIn: { $lt: new Date(checkOut) },
          checkOut: { $gt: new Date(checkIn) },
        },
      ],
    });

    // Step 3: Extract roomIds that are already booked
    const bookedRoomIds = existingBookings.map((b) =>
      b.roomId?.toString()
    );

    // Step 4: Filter out booked rooms
    const availableRooms = allRooms.filter(
      (room) => !bookedRoomIds.includes(room._id.toString())
    );

    return NextResponse.json({
      success: true,
      availableRooms,
    });
  } catch (err) {
    console.error("Error checking availability:", err);
    return NextResponse.json({ success: false, message: "Server error" });
  }
}

export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
