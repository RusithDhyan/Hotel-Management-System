// app/api/submit/route.js
import { connectDB } from "@/lib/mongodb";
import Experience from "@/models/Experience";

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  let base64Image = "";

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newExperience = await Experience.create({ title, description ,image:base64Image});
    return Response.json({ success: true, data: newExperience });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const exp = await Experience.find({});
    return Response.json({ success: true, data: exp });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}


