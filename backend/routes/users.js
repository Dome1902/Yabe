const { Router } = require('express')

const controller = require('../controllers/users')
const ensureAuth = require('../middleware/ensureAuth')

const router = Router() // .use(verifyToken)

// get users
router.get('/', ensureAuth, controller.getUsers)

// register
router.post('/register', controller.register)

// login
router.post('/login', controller.login)

module.exports = router
