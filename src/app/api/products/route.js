import { NextResponse } from "next/server";

// database
import { prisma } from "@/libs/prisma";

export async function GET() {
  const products = await prisma.products.findMany();
  console.log(products);
  return NextResponse.json({
    Resulset: products,
  });
}
