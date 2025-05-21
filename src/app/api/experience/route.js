// app/api/submit/route.js
import { connectDB } from "@/lib/mongodb";
import Experience from "@/models/Experience";

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const main_title = formData.get("main_title");
  const main_description = formData.get("main_description");
  const body_title = formData.get("body_title");
  const body_description = formData.get("body_description");
  const image = formData.get("image");
  const image_slider = formData.getAll("image_slider");

  let base64Image = "";
  let base64Images = [];

  for (const image of image_slider) {
    if (image && typeof image === "object") {
      const buffer = Buffer.from(await image.arrayBuffer());
      const base64 = `data:${image.type};base64,${buffer.toString("base64")}`;
      base64Images.push(base64);
    }
  }

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newExperience = await Experience.create({
      title,
      description,
      main_title,
      main_description,
      body_title,
      body_description,
      image: base64Image,
      image_slider: base64Images,
    });
    return Response.json({ success: true, data: newExperience });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const exp = await Experience.find({});
    return Response.json({ success: true, data: exp });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
