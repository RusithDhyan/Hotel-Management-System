// app/api/submit/route.js
import { connectDB } from "@/lib/mongodb";
import Hotel from "@/models/Hotel";

export async function POST(req) {
  const formData = await req.formData();
  const hotel_name = formData.get("hotel_name");
  const title = formData.get("title");
  const location = formData.get("location");
  const description = formData.get("description");
  const thumbnail = formData.get("thumbnail");
  const image = formData.get("image");

  let base64Image = "";
  let base64Image1 = "";

  if (image && typeof image === "object") {
    const buffer = Buffer.from(await image.arrayBuffer());
    base64Image = `data:${image.type};base64,${buffer.toString("base64")}`;
  }

  if (thumbnail && typeof thumbnail === "object") {
    const buffer = Buffer.from(await thumbnail.arrayBuffer());
    base64Image1 = `data:${thumbnail.type};base64,${buffer.toString("base64")}`;
  }

  try {
    await connectDB();
    const newHotel = await Hotel.create({
      hotel_name,
      title,
      location,
      description,
      thumbnail:base64Image1,
      image: base64Image,
    });
    return Response.json({ success: true, data: newHotel });
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
    const hotel = await Hotel.find({});
    return Response.json({ success: true, data: hotel });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
