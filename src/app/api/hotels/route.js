
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import mongoose from "mongoose";
// import path from "path";
// import { writeFile } from "fs/promises";
// import Hotel from "@/models/Hotel";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const hotelId = url.searchParams.get("hotelId");

//   try {
//     await connectDB();

//     const query = hotelId
//       ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
//       : {};

//     const offers = await Hotel.find(query);
//     return NextResponse.json({ success: true, data: offers });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function POST(req) {
//    const formData = await req.formData();
//   const hotel_name = formData.get("hotel_name");
//   const title = formData.get("title");
//   const location = formData.get("location");
//   const description = formData.get("description");
//   const thumbnail = formData.get("thumbnail");
//   const image = formData.get("image");
//   const cover_image = formData.get("cover_image");

//   try {
//     await connectDB();
//     let thumbUrl = "";
//     let imageUrl = "";
//     let coverImgUrl = "";

//     if (image && typeof image === "object") {
//       const buffer = Buffer.from(await image.arrayBuffer());
//       const filename = `${Date.now()}-${image.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       imageUrl = `/uploads/${filename}`;
//     }

//     if (thumbnail && typeof thumbnail === "object") {
//       const buffer = Buffer.from(await thumbnail.arrayBuffer());
//       const filename = `${Date.now()}-${thumbnail.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       thumbUrl = `/uploads/${filename}`;
//     }

//     if (cover_image && typeof cover_image === "object") {
//       const buffer = Buffer.from(await cover_image.arrayBuffer());
//       const filename = `${Date.now()}-${cover_image.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       coverImgUrl = `/uploads/${filename}`;
//     }

//     const hotel = await Hotel.create({
//       hotel_name,
//       title,
//       location,
//       description,
//       thumbnail:thumbUrl,
//       image: imageUrl,
//       cover_image: coverImgUrl,
//     });

//     return NextResponse.json({ success: true, data: hotel });
//   } catch (error) {
//     console.error("POST Offer Error:", error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";
import Hotel from "@/models/Hotel";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  try {
    await connectDB();

    const query = hotelId
      ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
      : {};

    const hotels = await Hotel.find(query);
    return NextResponse.json({ success: true, data: hotels });
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

    // Upload thumbnail
    if (thumbnail && typeof thumbnail === "object") {
      const buffer = Buffer.from(await thumbnail.arrayBuffer());
      const base64Image = `data:${thumbnail.type};base64,${buffer.toString("base64")}`;
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "hotels",
        public_id: `${Date.now()}-${thumbnail.name}`,
      });
      thumbUrl = uploadResult.secure_url;
    }

    // Upload main image
    if (image && typeof image === "object") {
      const buffer = Buffer.from(await image.arrayBuffer());
      const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "hotels",
        public_id: `${Date.now()}-${image.name}`,
      });
      imageUrl = uploadResult.secure_url;
    }

    // Upload cover image
    if (cover_image && typeof cover_image === "object") {
      const buffer = Buffer.from(await cover_image.arrayBuffer());
      const base64Image = `data:${cover_image.type};base64,${buffer.toString("base64")}`;
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "hotels",
        public_id: `${Date.now()}-${cover_image.name}`,
      });
      coverImgUrl = uploadResult.secure_url;
    }

    const hotel = await Hotel.create({
      hotel_name,
      title,
      location,
      description,
      thumbnail: thumbUrl,
      image: imageUrl,
      cover_image: coverImgUrl,
    });

    return NextResponse.json({ success: true, data: hotel });
  } catch (error) {
    console.error("POST Hotel Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
