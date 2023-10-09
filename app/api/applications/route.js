import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import ToDo from "@/models/ToDo";
import { NextResponse } from "next/server";

// export async function POST (req) {
//   const body = await req.json()
//   console.log(body)
//   await connectMongoDB();
//   await Application.create(body)
//   return NextResponse.json({message: "Application Created", status: 201})
// }

export async function GET (req) {
  await connectMongoDB();
  const applications = await Application.find()
  return NextResponse.json(applications)
}

export async function POST (req) {
  const {to_do, ...body} = await req.json()
  await connectMongoDB();
  const application = await Application.create(body)
  let toDoIdArr = []
  for (const item of to_do) {
    const res = await ToDo.create(item)
    await Application.findByIdAndUpdate(application._id, {
      $push: { to_do: res._id }
    }, { new: true })
  }

  // await Application.create(body)
  return NextResponse.json({message: "Application Created", status: 201})
}

// export async function POST (req) {
//   const {to_do, ...body} = await req.json()
//   await connectMongoDB();
//   const application = await Application.create(body)
//   let toDoIdArr = []
//   for (const item of to_do) {
//     const res = await ToDo.create({
//       description: item.description,
//       application: application._id
//     })
//   }

//   // await Application.create(body)
//   return NextResponse.json({message: "Application Created", status: 201})
// }