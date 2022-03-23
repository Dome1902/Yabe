const cron = require('node-cron')

const service = require('../services/articles')

const updateArticlesStatus = () => {
  cron.schedule('* * * * *', async () => {
    const articlesUpdates = await service.updateArticles()

    console.log('CRON: total articles updated => ', articlesUpdates.modifiedCount)
  })
}

module.exports = updateArticlesStatus
