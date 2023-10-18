import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


// /api/applications/[applicationid]/contact
export async function POST (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    const res = await Contact.create(body)
    await Application.findByIdAndUpdate(params.applicationid, {
      $push: { contacts: res._id }
    }, { new: true })
    return NextResponse.json({message: "Contact Created", status: 200, res})

  } catch (err) {
    return NextResponse.json({message: "Error creating new contact", status: 500})
  }
}

// /api/applications/[applicationid]/contact
export async function DELETE (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    const res = await Application.findByIdAndUpdate(params.applicationId, {
      $pull: { contacts: { _id: body.contactId } }
    }, { new: true })
    return NextResponse.json({message: "Application deleted", status: 200, res})

  } catch {
    return NextResponse.json({message: "Error deleting contact", status: 500})
  }
}