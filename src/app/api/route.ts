import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const region = searchParams.get("region") || "Pakistan";

  // Call Python backend (FastAPI)
  const res = await fetch(`http://127.0.0.1:8000/see_more_details?region=${region}`);
  const data = await res.json();

  // 🔑 Important: return only the array of news details
  return NextResponse.json(data.details || []);
}
