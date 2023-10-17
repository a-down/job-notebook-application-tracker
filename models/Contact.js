import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema(
  { 
    contact_name: {
      type: String,
      required: true,
    },
    contact_linkedin: String,
    contact_email: String,
    contact_phone: String
  },
  {
    timestamps: true,
  }
)

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema)

export default Contact