// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Hotel from "@/models/Hotel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedHotel = await Hotel.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedHotel) {
      return NextResponse.json({ message: "Hotel not found" }, { status: 404 });
    }
    return NextResponse.json(updatedHotel, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update hotel", error }, { status: 500 });
  }
}



export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedHotel = await Hotel.findByIdAndDelete(id).lean();
    if (!deletedHotel) {
      return NextResponse.json({ message: "Hotel not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Hotel deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Hotel", error }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    await connectDB();
    const hotel = await Hotel.findById(params.id).lean();

    if (!hotel) {
      return NextResponse.json({ error: "Hotel not found" }, { status: 404 });
    }

    return NextResponse.json(hotel);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}