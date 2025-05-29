// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Gallery from "@/models/Gallery";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedGallery = await Gallery.findByIdAndUpdate(id, data, {
      new: true,
    }).lean();
    if (!updatedGallery) {
      return NextResponse.json(
        { message: "Gallery not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedGallery, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update user", error },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedGallery = await Gallery.findByIdAndDelete(id).lean();
    if (!deletedGallery) {
      return NextResponse.json(
        { message: "Gallery not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Gallery deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete Gallery", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    await connectDB();
    const gallery = await Gallery.findById(params.id);

    if (!gallery) {
      return NextResponse.json({ error: "gallery not found" }, { status: 404 });
    }

    return NextResponse.json({ gallery });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
