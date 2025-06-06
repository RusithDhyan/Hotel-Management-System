// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Accommodation from "@/models/Accommodation";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedAccommodation) {
      return NextResponse.json({ message: "Accommodation not found" }, { status: 404 });
    }
    return NextResponse.json(updatedAccommodation, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedAccommodation = await Accommodation.findByIdAndDelete(id).lean();
    if (!deletedAccommodation) {
      return NextResponse.json({ message: "Accommodation not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Accommodation deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Accommodation", error }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    await connectDB();
    const room = await Accommodation.findById(params.id).lean();

    if (!room) {
      return NextResponse.json({ error: "room not found" }, { status: 404 });
    }

    return NextResponse.json({room});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}