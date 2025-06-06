// app/api/blogs/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;

  try {
    const formData = await request.formData();

    const fields = {
      title: formData.get("title"),
      description: formData.get("description"),
      main_title: formData.get("main_title"),
      main_description: formData.get("main_description"),
      body_title: formData.get("body_title"),
      body_description: formData.get("body_description"),
    };

    // Handle main image
    const image = formData.get("image");
    if (image && typeof image === "object" && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const imagePath = path.join(process.cwd(), "public/uploads", image.name);
      await writeFile(imagePath, buffer);
      fields.image = `/uploads/${image.name}`;
    }

    // Handle multiple images (image_slider)
    const image_slider_files = formData.getAll("image_slider");
    const image_slider_paths = [];

    for (const file of image_slider_files) {
      if (typeof file === "object" && file.size > 0) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(process.cwd(), "public/uploads", file.name);
        await writeFile(filePath, buffer);
        image_slider_paths.push(`/uploads/${file.name}`);
      }
    }

    if (image_slider_paths.length > 0) {
      fields.image_slider = image_slider_paths;
    }

    await connectDB();
    const updatedBlog = await Blog.findByIdAndUpdate(id, fields, { new: true }).lean();

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updatedBlog);
  } catch (error) {
    console.error("PUT error:", error);
    return NextResponse.json({ message: "Failed to update blog", error }, { status: 500 });
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
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ blog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
