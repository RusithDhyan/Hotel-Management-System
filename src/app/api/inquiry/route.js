// app/api/submit/route.js
import { connectDB } from "@/lib/mongodb";
import Inquiry from "@/models/Inquiry";
import { NextResponse } from "next/server";

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const guests = parseInt(formData.get("guests"));
  const check_in = new Date(formData.get("check_in"));
  const check_out = new Date(formData.get("check_out"));
  const inquiry_type = formData.get("inquiry_type");
  const hotel = formData.get("hotel");
  const room_type = formData.get("room_type");
  const message = formData.get("message");

  try {
    await connectDB();
    const newInquiry = await Inquiry.create({
        name,
        email,
        phone,
        check_in,
        check_out,
        guests,
        inquiry_type,
        hotel,
        room_type,
        message,
    });
    return NextResponse.json({ success: true, data: newInquiry });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

