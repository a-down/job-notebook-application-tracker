import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";


// /api/applications/[applicationid]
// get an application by applicationid
export async function GET (req, { params }) {
  try {
    await connectMongoDB();
    const application = await Application.findById(params.applicationid).populate('to_do').populate('contacts')
    return NextResponse.json({status: 200, application})

  } catch {
    return NextResponse.json({status: 500, message: 'Error getting application'})
  }
}

// /api/applications/[applicationid]
// update an application
export async function PUT (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    await Application.findByIdAndUpdate(params.applicationid, body)
    return NextResponse.json({message: "Application Updated", status: 200})

  } catch {
    return NextResponse.json({message: "Error updating application", status: 500})
  }
}

// /api/applications/[applicationid]
// delete an application
export async function DELETE (req, { params }) {
  try {
    await connectMongoDB();
    await Application.findByIdAndDelete(params.applicationid)
    return NextResponse.json({message: "Application Deleted", status: 200, params: params})

  } catch {
    return NextResponse.json({message: "Error deleting application", status: 500})
  }
}