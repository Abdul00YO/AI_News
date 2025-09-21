// api/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const region = searchParams.get("region") || "Pakistan";
    const mode = searchParams.get("mode") || "titles"; // 'titles' or 'details'

    let url = "";

    // ⛔️ IMPORTANT: Update the port if it's not 8000
    if (mode === "titles") {
      url = `http://127.0.0.1:8000/top_3_titles?region=${region}`;
    } else {
      url = `http://127.0.0.1:8000/see_more_details?region=${region}`;
    }

    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch from backend" }, { status: 500 });
    }
    const data = await res.json();

    // If fetching titles, map to minimal NewsItem objects
    if (mode === "titles") {
      const mapped = (data.titles || []).map((title: string, index: number) => ({
        // It's crucial to use a real ID from the backend if possible.
        // For now, let's assume the API returns full objects for titles.
        // If it only returns strings, we have to generate a fake ID.
        // Let's adjust to assume the `top_3_titles` endpoint is a simplified version of `see_more_details`
        id: index + 1,
        headline: title,
        description: "",
        details: "",
        image_url: "/placeholder.jpg",
        latitude: 0,
        longitude: 0,
        provinceName: data.region, // 🔑 This is the key change!
      }));
      return NextResponse.json(mapped);
    }

    // If fetching details, return full details as-is
    // Need to generate IDs for each item to match the titles
    const detailedData = (data.details || []).map((item: any, index: number) => ({
      ...item,
      id: index + 1, // Generate a numeric ID to match the titles
      provinceName: data.region,
    }));
    
    return NextResponse.json(detailedData);
  } catch (err) {
    console.error("API route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}