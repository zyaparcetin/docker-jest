const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongo/joy-toys-local'
console.log('connectionString', connectionString)
mongoose.set('debug', false) // before: mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established', connectionString))
  .catch(error => console.log('not connected:', error))
