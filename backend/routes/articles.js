const { Router } = require('express')
const controller = require('../controllers/articles')
const ensureAuth = require('../middleware/ensureAuth')

const router = Router().use(ensureAuth)

// get all articles
router.get('/', controller.getArticles)

// create article
router.post('/', controller.createArticle)

// get articles for given user
router.get('/user/:userId', controller.getUserArticle)

// get article available for bidding
router.get('/available', controller.getAvailableArticles)

// search articles
router.get('/search', controller.searchArticle)

// get article y id
router.get('/:id', controller.getArticle)

// update article
router.put('/:id', controller.updateArticle)

// delete article
router.delete('/:id', controller.deleteArticle)

module.exports = router
