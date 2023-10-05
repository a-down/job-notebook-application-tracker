import mongoose, { Schema, model, models } from 'mongoose';
import Application from "@/models/Application"

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    applications: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Application'
      }
    ]
  },
  {
    timestamps: true
  }
)


const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User