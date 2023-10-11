import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";


export async function GET (req, { params }) {
  await connectMongoDB();
  const applications = await Application.findById(params.applicationId).populate('to_do')
  return NextResponse.json(applications)
}

export async function PUT (req, { params }) {
  const body = await req.json()
  await connectMongoDB();
  await Application.findByIdAndUpdate(params.applicationId, body)
  return NextResponse.json({message: "Application Updated", status: 200})
}

export async function DELETE (req, { params }) {
  await connectMongoDB();
  await Application.findByIdAndDelete(params.applicationId)
  return NextResponse.json({message: "Application Deleted", status: 200, params: params})
}

// export async function POST (req) {
//   const {to_do, ...body} = await req.json()
//   await connectMongoDB();
//   const application = await Application.create(body)
//   let toDoIdArr = []
//   for (const item of to_do) {
//     const res = await ToDo.create(item)
//     await Application.findByIdAndUpdate(application._id, {
//       $push: { to_do: res._id }
//     }, { new: true })
//   }

//   // await Application.create(body)
//   return NextResponse.json({message: "Application Created", status: 201})
// }