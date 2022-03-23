const { StatusCodes } = require('http-status-codes')
const Bid = require('../models/Bid')
const Article = require('../models/Article')

// get all bids for an article
const getArticleBids = async (req, res) => {
  try {
    const { id } = req.params
    const bids = await Bid.find({ article: id })

    res.status(StatusCodes.OK).json(bids)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// get all bids made by a user
const getUserBids = async (req, res) => {
  try {
    const { id } = req.params
    const bids = await Bid.find({ user: id })

    res.status(StatusCodes.OK).json(bids)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// make new bid
const makeBid = async (req, res) => {
  try {
    const { userId } = req.user
    const { article, price } = req.body

    const bidInfo = { article, price, user: userId }

    if (!article || !price) {
      return res.status(StatusCodes.OK).json({ message: 'Missing required fields', error: true })
    }

    const articleFound = await Article.findOne({ _id: article })

    if (!articleFound) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Article not found', error: true })
    }

    if (!articleFound.biddingEnabled || articleFound.isSold) {
      return res.status(StatusCodes.OK).json({ message: 'Bidding no longer available for this article', error: true })
    }

    const newBid = await Bid.create(bidInfo)

    res.status(StatusCodes.OK).json({
      message: 'You bid was recorded',
      article: newBid.article,
      user: newBid.user,
      price: newBid.price
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

module.exports = { getArticleBids, getUserBids, makeBid }
