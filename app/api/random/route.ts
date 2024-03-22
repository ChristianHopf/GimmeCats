import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${process.env.CAT_API_KEY}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
