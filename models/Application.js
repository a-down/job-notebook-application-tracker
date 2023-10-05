import mongoose, { Schema } from 'mongoose';

const applicationSchema = new Schema(
  {
    created_at: Date,
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
        description: String,
        completed: {
          type: Boolean,
          default: false,
        },
        created_at: Date,
      }
    ],
    contacts: [
      {
        contact_name: String,
        contact_linkedin: String,
        contact_email: String
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
  }
)

const Application = mongoose.model('Application', applicationSchema)

export default Application