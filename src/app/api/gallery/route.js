// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectDB } from "@/lib/mongodb";
// import Gallery from "@/models/Gallery";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const hotelId = url.searchParams.get("hotelId");

//   try {
//     await connectDB();

//     const filter = hotelId
//       ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
//       : {};

//     const gallery = await Gallery.find(filter);

//     return NextResponse.json({ success: true, data: gallery });
//   } catch (error) {
//     console.error("GET /api/accommodation error:", error);
//     return NextResponse.json(
//       { success: false, error: "Failed to fetch" },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req) {
//   const formData = await req.formData();
//   const hotelId = formData.get("hotelId");
//   const image_slider = formData.getAll("image_slider");

//   let base64Images = [];

//   for (const img of image_slider) {
//     if (img && typeof img === "object") {
//       const buffer = Buffer.from(await img.arrayBuffer());
//       const base64 = `data:${img.type};base64,${buffer.toString("base64")}`;
//       base64Images.push(base64);
//     }
//   }

//   try {
//     await connectDB();
//     const newGallery = await Gallery.create({
//       hotelId,
//       image_slider: base64Images,
//     });
//     return NextResponse.json({ success: true, data: newGallery });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Offer from "@/models/Offer";
import mongoose from "mongoose";
import path from "path";
import { writeFile } from "fs/promises";
import Gallery from "@/models/Gallery";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  try {
    await connectDB();

    const query = hotelId
      ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
      : {};

    const gallery = await Gallery.find(query);
    return NextResponse.json({ success: true, data: gallery });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
   const formData = await req.formData();
  const hotelId = formData.get("hotelId");
  const image_slider = formData.getAll("image_slider");

  try {
    await connectDB();

    let imagesUrl = [];

    if (image_slider && image_slider.length > 0) {
         for (const file of image_slider) {
           if (file && typeof file === "object") {
             const buffer = Buffer.from(await file.arrayBuffer());
             const filename = `${Date.now()}-${file.name}`;
             const filepath = path.join(process.cwd(), "public/uploads", filename);
             await writeFile(filepath, buffer);
             imagesUrl.push(`/uploads/${filename}`);
           }
         }
       }

    const gallery = await Gallery.create({
      hotelId,
      image_slider: imagesUrl,
    });

    return NextResponse.json({ success: true, data: gallery });
  } catch (error) {
    console.error("POST Offer Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

