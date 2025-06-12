// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Offer from "@/models/Offer";
// import mongoose from "mongoose";
// import path from "path";
// import { writeFile } from "fs/promises";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const hotelId = url.searchParams.get("hotelId");

//   try {
//     await connectDB();

//     const query = hotelId
//       ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
//       : {};

//     const offers = await Offer.find(query);
//     return NextResponse.json({ success: true, data: offers });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function POST(req) {
//   const formData = await req.formData();
//   const hotelId = formData.get("hotelId");
//   const offer_type = formData.get("offer_type");
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const image = formData.get("image");

//   try {
//     await connectDB();

//     let imageUrl = "";

//     if (image && typeof image === "object") {
//       const buffer = Buffer.from(await image.arrayBuffer());
//       const filename = `${Date.now()}-${image.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       imageUrl = `/uploads/${filename}`;
//     }

//     const offer = await Offer.create({
//       hotelId,
//       offer_type,
//       title,
//       description,
//       image: imageUrl,
//     });

//     return NextResponse.json({ success: true, data: offer });
//   } catch (error) {
//     console.error("POST Offer Error:", error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Offer from "@/models/Offer";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";

// Cloudinary config
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

    const offers = await Offer.find(query);
    return NextResponse.json({ success: true, data: offers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const hotelId = formData.get("hotelId");
  const offer_type = formData.get("offer_type");
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  try {
    await connectDB();

    let imageUrl = "";

    if (image && typeof image === "object") {
      const buffer = Buffer.from(await image.arrayBuffer());

      // Convert to base64
      const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;

      // Upload to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "offers", // Optional: folder name in Cloudinary
        public_id: `${Date.now()}-${image.name}`,
      });

      imageUrl = uploadResult.secure_url;
    }

    const offer = await Offer.create({
      hotelId,
      offer_type,
      title,
      description,
      image: imageUrl,
    });

    return NextResponse.json({ success: true, data: offer });
  } catch (error) {
    console.error("POST Offer Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
