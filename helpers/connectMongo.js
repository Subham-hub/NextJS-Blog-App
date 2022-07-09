import mongoose from 'mongoose'

const connection = {}

const dbConnect = async () => {
  if (connection.isConnected) retrun

  const db = await mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState
}

export default dbConnect
