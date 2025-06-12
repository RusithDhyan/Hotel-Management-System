
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import Offer from "@/models/Offer";
// import mongoose from "mongoose";
// import path from "path";
// import { writeFile } from "fs/promises";
// import PageExp from "@/models/PageExp";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const hotelId = url.searchParams.get("hotelId");

//   try {
//     await connectDB();

//     const query = hotelId
//       ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
//       : {};

//     const exp = await PageExp.find(query);
//     return NextResponse.json({ success: true, data: exp });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function POST(req) {
//  const formData = await req.formData();
//   const hotelId = formData.get("selectedHotelId");
//   const image_right = formData.get("image_right");
//   const description_right = formData.get("description_right");
//   const image_left = formData.get("image_left");
//   const description_left = formData.get("description_left");

//   try {
//     await connectDB();

//     let imageRightUrl = "";
//     let imageLeftUrl = "";

//     if (image_right && typeof image_right === "object") {
//       const buffer = Buffer.from(await image_right.arrayBuffer());
//       const filename = `${Date.now()}-${image_right.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       imageRightUrl = `/uploads/${filename}`;
//     }

//     if (image_left && typeof image_left === "object") {
//       const buffer = Buffer.from(await image_left.arrayBuffer());
//       const filename = `${Date.now()}-${image_left.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       imageLeftUrl = `/uploads/${filename}`;
//     }


//     const exp = await PageExp.create({
//       hotelId,
//       image_right:imageRightUrl,
//       description_right,
//       image_left:imageLeftUrl,
//       description_left,
    
//     });

//     return NextResponse.json({ success: true, data: exp });
//   } catch (error) {
//     console.error("POST Offer Error:", error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import PageExp from "@/models/PageExp";
import mongoose from "mongoose";
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

    const exp = await PageExp.find(query);
    return NextResponse.json({ success: true, data: exp });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const hotelId = formData.get("selectedHotelId");
  const image_right = formData.get("image_right");
  const description_right = formData.get("description_right");
  const image_left = formData.get("image_left");
  const description_left = formData.get("description_left");

  try {
    await connectDB();

    let imageRightUrl = "";
    let imageLeftUrl = "";

    // Upload image_right to Cloudinary
    if (image_right && typeof image_right === "object") {
      const buffer = Buffer.from(await image_right.arrayBuffer());
      const base64Image = `data:${image_right.type};base64,${buffer.toString("base64")}`;
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "page_exp",
        public_id: `${Date.now()}-${image_right.name}`,
      });
      imageRightUrl = uploadResult.secure_url;
    }

    // Upload image_left to Cloudinary
    if (image_left && typeof image_left === "object") {
      const buffer = Buffer.from(await image_left.arrayBuffer());
      const base64Image = `data:${image_left.type};base64,${buffer.toString("base64")}`;
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "page_exp",
        public_id: `${Date.now()}-${image_left.name}`,
      });
      imageLeftUrl = uploadResult.secure_url;
    }

    const exp = await PageExp.create({
      hotelId,
      image_right: imageRightUrl,
      description_right,
      image_left: imageLeftUrl,
      description_left,
    });

    return NextResponse.json({ success: true, data: exp });
  } catch (error) {
    console.error("POST PageExp Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
