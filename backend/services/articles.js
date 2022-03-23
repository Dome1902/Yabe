const moment = require('moment')

const Article = require('../models/Article')

const updateArticles = async () => {
  const biddingTimeLimit = moment().subtract(15, 'minutes').toDate()

  const articles = await Article.updateMany(
    { createdAt: { $lt: biddingTimeLimit }, isSold: false, biddingEnabled: true },
    { $set: { isSold: true, biddingEnabled: false } }
  )

  return articles
}

module.exports = { updateArticles }
