const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const phoneNumber = process.argv[4]

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const phonebookSchema = new mongoose.Schema({
  name: String,
  number: Number,
})

phonebookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    return returnedObject
  }
})


module.exports =mongoose.model('contact', phonebookSchema)
