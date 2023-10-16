import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";

// /api/applications/[applicationid]/todo
export async function POST (req, { params }) {
  const body = await req.json()
  await connectMongoDB();
  const res = await ToDo.create(body)
  await Application.findByIdAndUpdate(params.applicationid, {
    $push: { to_do: res._id }
  }, { new: true })
  return NextResponse.json({message: "Application Updated", status: 200})
}





// export async function GET (req, { params }) {
//   await connectMongoDB();
//   const applications = await Application.findById(params.applicationid).populate('to_do')
//   return NextResponse.json(applications)
// }

// export async function PUT (req, { params }) {
//   const body = await req.json()
//   await connectMongoDB();
//   await Application.findByIdAndUpdate(params.applicationid, body)
//   return NextResponse.json({message: "Application Updated", status: 200})
// }

// export async function DELETE (req, { params }) {
//   await connectMongoDB();
//   await Application.findByIdAndDelete(params.applicationid)
//   return NextResponse.json({message: "Application Deleted", status: 200, params: params})
// }

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