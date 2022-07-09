import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
})

export default mongoose.models.ContactSchema ||
  mongoose.model('ContactSchema', contactSchema)
