const { Router } = require('express')
const controller = require('../controllers/uploads')
const ensureAuth = require('../middleware/ensureAuth')

const router = Router().use(ensureAuth)

// get all articles
router.post('/', controller.uploadImage)

module.exports = router
