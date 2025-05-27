// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedBlog = await Blog.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedBlog = await Blog.findByIdAndDelete(id).lean();
    if (!deletedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Blog deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Blog", error }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    await connectDB();
    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ error: "blog not found" }, { status: 404 });
    }

  return NextResponse.json({blog});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}