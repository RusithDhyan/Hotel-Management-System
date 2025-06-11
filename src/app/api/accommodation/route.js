// import { NextResponse } from "next/server";
// import mongoose from "mongoose";
// import { connectDB } from "@/lib/mongodb";
// import Accommodation from "@/models/Accommodation";

// export async function GET(req) {
//   const url = new URL(req.url);
//   const hotelId = url.searchParams.get("hotelId");

//   if (!hotelId) {
//     return NextResponse.json({ success: false, error: "Missing hotelId" }, { status: 400 });
//   }

//   try {
//     await connectDB();

//     const accommodations = await Accommodation.find({
//       hotelId: new mongoose.Types.ObjectId(hotelId),
//     });

//     return NextResponse.json({ success: true, data: accommodations }); // ✅ wrapped in success/data
//   } catch (error) {
//     console.error("GET /api/accommodation error:", error);
//     return NextResponse.json({ success: false, error: "Failed to fetch" }, { status: 500 });
//   }
// }


// export async function POST(req) {
//   const formData = await req.formData();
//   const hotelId = formData.get("hotelId");
//   const room_type = formData.get("room_type");
//   const price = formData.get("price");
//   const size = formData.get("size");
//   const description = formData.get("description"); 
//   const image = formData.get("image");
//   const images = formData.getAll("images");
//   const spec_type = formData.getAll("spec_type")

//   let base64Image = "";
//   let base64Images = [];

//   if (image && typeof image === "object") {
//     const buffer = Buffer.from(await image.arrayBuffer());
//     base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
//   }
  

//   for (const img of images) {
//     if (img && typeof img === "object") {
//       const buffer = Buffer.from(await img.arrayBuffer());
//       const base64 = `data:${img.type};base64,${buffer.toString("base64")}`;
//       base64Images.push(base64);
//     }
//   }


//   try {
//     await connectDB();
//     const newAccommodation = await Accommodation.create({
//       hotelId,
//       room_type,
//       price,
//       size,
//       description,
//       image: base64Image,
//       images: base64Images,
//       spec_type,
//     });
//     return NextResponse.json({ success: true, data: newAccommodation });
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
import Accommodation from "@/models/Accommodation";

export async function GET(req) {
  const url = new URL(req.url);
  const hotelId = url.searchParams.get("hotelId");

  try {
    await connectDB();

    const query = hotelId
      ? { hotelId: new mongoose.Types.ObjectId(hotelId) }
      : {};

    const offers = await Accommodation.find(query);
    return NextResponse.json({ success: true, data: offers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
 const formData = await req.formData();
  const hotelId = formData.get("hotelId");
  const room_type = formData.get("room_type");
  const price = formData.get("price");
  const size = formData.get("size");
  const description = formData.get("description"); 
  const image = formData.get("image");
  const images = formData.getAll("images");
  const spec_type = formData.getAll("spec_type")

  try {
    await connectDB();

    let imageUrl = "";
    let imagesUrl = [];

    if (image && typeof image === "object") {
      const buffer = Buffer.from(await image.arrayBuffer());
      const filename = `${Date.now()}-${image.name}`;
      const filepath = path.join(process.cwd(), "public/uploads", filename);
      await writeFile(filepath, buffer);
      imageUrl = `/uploads/${filename}`;
    }

     if (images && images.length > 0) {
          for (const file of images) {
            if (file && typeof file === "object") {
              const buffer = Buffer.from(await file.arrayBuffer());
              const filename = `${Date.now()}-${file.name}`;
              const filepath = path.join(process.cwd(), "public/uploads", filename);
              await writeFile(filepath, buffer);
              imagesUrl.push(`/uploads/${filename}`);
            }
          }
        }

    const offer = await Accommodation.create({
      hotelId,
      room_type,
      price,
      size,
      description,
      image: imageUrl,
      images: imagesUrl,
      spec_type,
    });

    return NextResponse.json({ success: true, data: offer });
  } catch (error) {
    console.error("POST Offer Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

