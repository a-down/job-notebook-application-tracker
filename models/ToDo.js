import mongoose, { Schema } from 'mongoose';

const toDoSchema = new Schema(
  { 
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
    application:
      {
        type: Schema.Types.ObjectId,
        ref: 'Application'
      }
  },
  {
    timestamps: true,
  }
)

const ToDo = mongoose.models.ToDo || mongoose.model('ToDo', toDoSchema)

export default ToDo