import mongoose from 'mongoose';

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    throw new Error(error)
  }
}

export default connectMongoDB;