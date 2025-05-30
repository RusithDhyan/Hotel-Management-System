// app/api/users/[id]/route.js

import { connectDB } from "@/lib/mongodb";
import Offer from "@/models/Offer";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();

  try {
    await connectDB();
    const updatedOffer = await Offer.findByIdAndUpdate(id, data, { new: true }).lean();
    if (!updatedOffer) {
      return NextResponse.json({ message: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json(updatedOffer, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to update user", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    await connectDB();
    const deletedOffer = await Offer.findByIdAndDelete(id).lean();
    if (!deletedOffer) {
      return NextResponse.json({ message: "Offer not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Offer deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Offer", error }, { status: 500 });
  }
}


export async function GET(req, { params }) {
  try {
    await connectDB();
    const offer = await Offer.findById(params.id).lean();

    if (!offer) {
      return NextResponse.json({ error: "offer not found" }, { status: 404 });
    }

    return NextResponse.json({offer});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}