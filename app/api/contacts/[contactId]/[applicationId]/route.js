import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


export async function DELETE (req, { params }) {
  await connectMongoDB();
  const res = await Application.findByIdAndUpdate(params.applicationId, {
    $pull: { contacts: params.contactId }
  }, { new: true })
  const contact = await Contact.findByIdAndDelete(params.contactId)
  return NextResponse.json({message: `${contact.contact_name}'s contact has been deleted`, status: 200, res})
}
