import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


// /api/applications/[applicationid]/file
// create a new file for an application
export async function POST (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    const res = await Application.findByIdAndUpdate(params.applicationid, {
      $push: { files: body }
    }, { new: true })
    return NextResponse.json({message: "File created", status: 200, res})

  } catch (err) {
    return NextResponse.json({message: "Error creating file", status: 500})
  }
}

// /api/applications/[applicationid]/file
// delete a file from an application
export async function DELETE (req, { params }) {
  try {
    const body = await req.json()
    await connectMongoDB();
    const res = await Application.updateOne({_id: params.applicationid}, {
      $pull: { files: { "_id": body.fileId}}
    })
    return NextResponse.json({message: "File Deleted", status: 200, res})

  } catch (err) {
    return NextResponse.json({message: "Error deleting file", status: 500})
  }
}