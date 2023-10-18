import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";


// /api/applications
// get all applications
export async function GET (req) {
  try {
    await connectMongoDB();
    const applications = await Application.find().populate('to_do').populate('contacts')
    return NextResponse.json({status: 200, applications})

  } catch {
    return NextResponse.json({status: 500, message: 'Error getting applications'})
  }
}

// /api/applications
// create an application
export async function POST (req) {
  try {
    const {to_do, ...body} = await req.json()
    await connectMongoDB();
    const application = await Application.create(body)
    let toDoIdArr = []
    if (to_do) {
    for (const item of to_do) {
      const res = await ToDo.create(item)
      await Application.findByIdAndUpdate(application._id, {
        $push: { to_do: res._id }
      }, { new: true })
    }}
    return NextResponse.json({message: "Application created", status: 200})
    
  } catch {
    return NextResponse.json({status: 500, message: 'Error creating application'})
  }
}