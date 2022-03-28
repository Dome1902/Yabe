const { Router } = require('express')
const controller = require('../controllers/articles')
const ensureAuth = require('../middleware/ensureAuth')

//Bennis Änderung
//const router = Router().use(ensureAuth)
const router = Router();

// get all articles
router.get('/', controller.getArticles)

// create article
router.post('/', ensureAuth, controller.createArticle)

// get articles for given user
router.get('/user', ensureAuth, controller.getUserArticle)

// get article available for bidding
router.get('/available', controller.getAvailableArticles)

// search articles
router.get('/search', controller.searchArticle)

// get article y id
router.get('/:id', controller.getArticle)

// update article
router.put('/:id', controller.updateArticle)

// delete article
router.delete('/:id', ensureAuth, controller.deleteArticle)

module.exports = router
