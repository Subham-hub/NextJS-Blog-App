import dbConnect from '../../helpers/connectMongo'
import Contact from '../../models/newsletter-model'

const handler = async (req, res) => {
  dbConnect()
  if (req.method === 'POST') {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      return res.status(422).json({ message: 'Invalid Input' })
    }

    try {
      await Contact.create({ email, name, message })
    } catch (error) {
      console.log('error: ' + error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
    res.status(201).json({ success: true})
  }
}

export default handler
