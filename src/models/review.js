// my review.js
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const reviewSchema = new mongoose.Schema({
  text: String,
  rate: Number,
  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})

reviewSchema.plugin(autopopulate)
module.exports = mongoose.model('Review', reviewSchema)
