import mongoose, { Schema } from 'mongoose';

const applicationSchema = new Schema(
  {
    user_id: String,
    completed: {
      type: Boolean,
      default: false,
    },
    role: {
      role_name: String,
      company: {
        company_name: String,
        company_website: String,
        company_linkedin: String,
      },
      application_link: String,
      job_description: String,
      due_date: String,
    },
    to_do: [
      {
        type: Schema.Types.ObjectId,
        ref: 'ToDo'
      }
    ],
    contacts: [
      {
        contact_name: String,
        contact_linkedin: String,
        contact_email: String,
        contact_phone: Number
      }
    ],
    files: [
      {
        file_name: String,
        file_type: String,
        file_link: String,
      }
    ],
    notes: String,
  },
  {
    timestamps: true,
  }
)

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema)

export default Application