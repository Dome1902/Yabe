const mongoose = require('mongoose')

const BidSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article'
    },
    price: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: 'placed',
      enum: ['placed', 'approved']
    },
    complete: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Bid', BidSchema)
