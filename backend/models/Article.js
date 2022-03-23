const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true,
      trim: true
    },
    isSold: {
      type: Boolean,
      default: false
    },
    biddingEnabled: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

ArticleSchema.index({ name: 'text', description: 'text' })

module.exports = mongoose.model('Article', ArticleSchema)
