import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


// /api/applications/[userId]
// userId is user_id from Clerk Auth
export async function GET (req, { params }) {
  try {
    await connectMongoDB();
    const applications = await Application.find({ user_id: params.userId }).populate('to_do').populate('contacts')
    return NextResponse.json({status: 200, applications})
  } catch {
    return NextResponse.json({status: 500, message: 'Error getting applications'})
  }
}