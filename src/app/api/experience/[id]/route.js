// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedExperience = await Experience.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedExperience) {
      return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }
    return NextResponse.json(updatedExperience, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedExperience = await Experience.findByIdAndDelete(id).lean();
    if (!deletedExperience) {
      return NextResponse.json({ message: "Experience not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Experience deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Experience", error }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    await connectDB();
    const experience = await Experience.findById(params.id);

    if (!experience) {
      return NextResponse.json({ error: "experience not found" }, { status: 404 });
    }

    return NextResponse.json({experience});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}