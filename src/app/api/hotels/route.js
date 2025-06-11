// // app/api/submit/route.js
// import { connectDB } from "@/lib/mongodb";
// import Hotel from "@/models/Hotel";

// export async function POST(req) {
//   const formData = await req.formData();
//   const hotel_name = formData.get("hotel_name");
//   const title = formData.get("title");
//   const location = formData.get("location");
//   const description = formData.get("description");
//   const thumbnail = formData.get("thumbnail");
//   const image = formData.get("image");
//   const cover_image = formData.get("cover_image");

//   let base64Image = "";
//   let base64Image1 = "";
//   let base64Image2 = "";

//   if (image && typeof image === "object") {
//     const buffer = Buffer.from(await image.arrayBuffer());
//     base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
//   }

//   if (thumbnail && typeof thumbnail === "object") {
//     const buffer = Buffer.from(await thumbnail.arrayBuffer());
//     base64Image1 = `data:${thumbnail.type};base64,${buffer.toString("base64")}`;
//   }

//    if (cover_image && typeof cover_image === "object") {
//     const buffer = Buffer.from(await cover_image.arrayBuffer());
//     base64Image2 = `data:${cover_image.type};base64,${buffer.toString("base64")}`;
//   }

//   try {
//     await connectDB();
//     const newHotel = await Hotel.create({
//       hotel_name,
//       title,
//       location,
//       description,
//       thumbnail:base64Image1,
//       image: base64Image,
//       cover_image: base64Image2
//     });
//     return Response.json({ success: true, data: newHotel });
//   } catch (error) {
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function GET() {
//   try {
//     await connectDB();
//     const hotel = await Hotel.find({});
//     return Response.json({ success: true, data: hotel });
//   } catch (error) {
//     return Response.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import path from "path";
import { writeFile } from "fs/promises";
import Hotel from "@/models/Hotel";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  try {
    await connectDB();

    const query = hotelId
      ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
      : {};

    const offers = await Hotel.find(query);
    return NextResponse.json({ success: true, data: offers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
   const formData = await req.formData();
  const hotel_name = formData.get("hotel_name");
  const title = formData.get("title");
  const location = formData.get("location");
  const description = formData.get("description");
  const thumbnail = formData.get("thumbnail");
  const image = formData.get("image");
  const cover_image = formData.get("cover_image");

  try {
    await connectDB();
    let thumbUrl = "";
    let imageUrl = "";
    let coverImgUrl = "";

    if (image && typeof image === "object") {
      const buffer = Buffer.from(await image.arrayBuffer());
      const filename = `${Date.now()}-${image.name}`;
      const filepath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filepath, buffer);
      imageUrl = `/uploads/${filename}`;
    }

    if (thumbnail && typeof thumbnail === "object") {
      const buffer = Buffer.from(await thumbnail.arrayBuffer());
      const filename = `${Date.now()}-${thumbnail.name}`;
      const filepath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filepath, buffer);
      thumbUrl = `/uploads/${filename}`;
    }

    if (cover_image && typeof cover_image === "object") {
      const buffer = Buffer.from(await cover_image.arrayBuffer());
      const filename = `${Date.now()}-${cover_image.name}`;
      const filepath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filepath, buffer);
      coverImgUrl = `/uploads/${filename}`;
    }

    const hotel = await Hotel.create({
      hotel_name,
      title,
      location,
      description,
      thumbnail:thumbUrl,
      image: imageUrl,
      cover_image: coverImgUrl,
    });

    return NextResponse.json({ success: true, data: hotel });
  } catch (error) {
    console.error("POST Offer Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

