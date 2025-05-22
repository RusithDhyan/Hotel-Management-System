// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Accommodation from "@/models/Accommodation";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedAccommodation = await Accommodation.findByIdAndUpdate(id, data, { new: true });
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
    const deletedAccommodation = await Accommodation.findByIdAndDelete(id);
    if (!deletedAccommodation) {
      return NextResponse.json({ message: "Accommodation not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Accommodation deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Accommodation", error }, { status: 500 });
  }
}
