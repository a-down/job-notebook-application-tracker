import connectMongoDB from "@/libs/mongodb";
import Application from "@/models/Application";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";


// /api/contacts/[contactId]/[applicationId]
export async function DELETE (req, { params }) {
  try {
    await connectMongoDB();
    const res = await Application.findByIdAndUpdate(params.applicationId, {
      $pull: { contacts: params.contactId }
    }, { new: true })
    const contact = await Contact.findByIdAndDelete(params.contactId)
    return NextResponse.json({message: `${contact.contact_name}'s contact has been deleted`, status: 200, res})

  } catch (err) {
    return NextResponse.json({message: 'Error deleting contact', status: 500})
  }
}
