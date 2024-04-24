import { NextResponse } from "next/server";

export function GET(request, { params }) {
  return NextResponse.json({
    Resulset: "Obteniendo producto por id",
  });
}

export function PUT(request, { params }) {
  return NextResponse.json({
    Resulset: "Obteniendo producto por id",
  });
}

export function DELETE(request, { params }) {
  return NextResponse.json({
    Resulset: "Obteniendo producto por id",
  });
}
