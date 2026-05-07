import { connectDB } from "@/lib/db";

export async function GET() {
  try {
    await connectDB();

    return Response.json({
      success: true,
      message: "MongoDB connected ✅"
    });

  } catch (err) {
    return Response.json({
      success: false,
      error: err.message
    });
  }
}