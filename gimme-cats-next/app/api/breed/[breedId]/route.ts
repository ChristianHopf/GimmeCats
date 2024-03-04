import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { breedId: string } }
) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&has_breeds=1&breed_ids=${params.breedId}&api_key=${process.env.CAT_API_KEY}`
  );
  const data = await res.json();
  return NextResponse.json(data);
}
