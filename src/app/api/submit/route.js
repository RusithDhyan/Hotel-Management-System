// app/api/submit/route.js
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const image = formData.get("image");

  let base64Image = "";

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newUser = await User.create({ name, email ,image:base64Image});
    return Response.json({ success: true, data: newUser });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const users = await User.find({});
    return Response.json({ success: true, data: users });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}


