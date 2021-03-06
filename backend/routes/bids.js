const { Router } = require('express')
const controller = require('../controllers/bids')
const ensureAuth = require('../middleware/ensureAuth')

const router = Router().use(ensureAuth)

// get user bids
router.get('/user/:id', controller.getUserBids)

// get article bids
router.get('/article/:id', controller.getArticleBids)

// create new bid
router.post('/', controller.makeBid)

module.exports = router
