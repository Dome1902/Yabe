const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

function authenticateToken (req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Not authorized', error: true })

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Not authorized', error: true })
    req.user = user
    next()
  })
}

module.exports = authenticateToken
