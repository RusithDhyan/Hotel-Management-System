// app/api/users/[id]/route.js
import { connectDB } from "@/lib/mongodb";
import PageExp from "@/models/PageExp";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedPageExp = await PageExp.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedPageExp) {
      return NextResponse.json({ message: "PageExp not found" }, { status: 404 });
    }
    return NextResponse.json(updatedPageExp, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedPageExp = await PageExp.findByIdAndDelete(id).lean();
    if (!deletedPageExp) {
      return NextResponse.json({ message: "PageExp not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "PageExp deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete PageExp", error }, { status: 500 });
  }
}
