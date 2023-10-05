import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import { NextResponse } from "next/server";

export async function POST(req) {

  await connectMongoDB();
  await Application.create(req.body)
  return NextResponse.json({message: "Application Created", status: 201})
}