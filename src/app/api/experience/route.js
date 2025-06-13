
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";
// import path from "path";
// import { writeFile } from "fs/promises";
// import Experience from "@/models/Experience";

// export async function GET(req) {
//   try {
//     await connectDB();

// const experiences = await Experience.find(); // Fetches all documents
//     return NextResponse.json({ success: true, data: experiences });
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(req) {
//   const formData = await req.formData();
//   const title = formData.get("title");
//   const description = formData.get("description");
//   const main_title = formData.get("main_title");
//   const main_description = formData.get("main_description");
//   const body_title = formData.get("body_title");
//   const body_description = formData.get("body_description");
//   const image = formData.get("image");
//   const image_slider = formData.getAll("image_slider");

//   try {
//     await connectDB();

//     let imageUrl = "";
//     let imageSliderUrl = [];

//     if (image && typeof image === "object") {
//       const buffer = Buffer.from(await image.arrayBuffer());
//       const filename = `${Date.now()}-${image.name}`;
//       const filepath = path.join(process.cwd(), "public/uploads", filename);
//       await writeFile(filepath, buffer);
//       imageUrl = `/uploads/${filename}`;
//     }

//     if (image_slider && image_slider.length > 0) {
//       for (const file of image_slider) {
//         if (file && typeof file === "object") {
//           const buffer = Buffer.from(await file.arrayBuffer());
//           const filename = `${Date.now()}-${file.name}`;
//           const filepath = path.join(process.cwd(), "public/uploads", filename);
//           await writeFile(filepath, buffer);
//           imageSliderUrl.push(`/uploads/${filename}`);
//         }
//       }
//     }

//     const experiences = await Experience.create({
//       title,
//       description,
//       main_title,
//       main_description,
//       body_title,
//       body_description,
//       image: imageUrl,
//       image_slider: imageSliderUrl,
//     });

//     return NextResponse.json({ success: true, data: experiences });
//   } catch (error) {
//     console.error("POST Exp Error:", error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Experience from "@/models/Experience";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET(req) {
  try {
    await connectDB();

    const experiences = await Experience.find(); // Fetch all
    return NextResponse.json({ success: true, data: experiences });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const formData = await req.formData();
  const type = formData.get("type");
  const title = formData.get("title");
  const description = formData.get("description");
  const main_title = formData.get("main_title");
  const main_description = formData.get("main_description");
  const body_title = formData.get("body_title");
  const body_description = formData.get("body_description");
  const image = formData.get("image");
  const image_slider = formData.getAll("image_slider");

  try {
    await connectDB();

    let imageUrl = "";
    let imageSliderUrl = [];

    if (image && typeof image === "object") {
      const buffer = Buffer.from(await image.arrayBuffer());
      const base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
      const uploadResult = await cloudinary.uploader.upload(base64Image, {
        folder: "experience_main",
        public_id: `${Date.now()}-${image.name}`,
      });
      imageUrl = uploadResult.secure_url;
    }

    if (image_slider && image_slider.length > 0) {
      for (const file of image_slider) {
        if (file && typeof file === "object") {
          const buffer = Buffer.from(await file.arrayBuffer());
          const base64Image = `data:${file.type};base64,${buffer.toString("base64")}`;
          const uploadResult = await cloudinary.uploader.upload(base64Image, {
            folder: "experience_slider",
            public_id: `${Date.now()}-${file.name}`,
          });
          imageSliderUrl.push(uploadResult.secure_url);
        }
      }
    }

    const experiences = await Experience.create({
      type,
      title,
      description,
      main_title,
      main_description,
      body_title,
      body_description,
      image: imageUrl,
      image_slider: imageSliderUrl,
    });

    return NextResponse.json({ success: true, data: experiences });
  } catch (error) {
    console.error("POST Exp Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
