// app/api/submit/route.js
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function POST(req) {
  const formData = await req.formData();
  const title = formData.get("title");
  const description = formData.get("description");
  const main_title = formData.get("main_title");
  const main_description = formData.get("main_description");
  const body_title = formData.get("body_title");
  const body_description = formData.get("body_description");
  const image = formData.get("image");

  let base64Image = "";

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newBlog = await Blog.create({
      title,
      description,
      main_title,
      main_description,
      body_title,
      body_description,
      image: base64Image,
    });
    return Response.json({ success: true, data: newBlog });
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
    const exp = await Blog.find({});
    return Response.json({ success: true, data: exp });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
