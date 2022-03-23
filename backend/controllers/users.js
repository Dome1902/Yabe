const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const User = require('../models/User')

// get users list
const getUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(users)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// Register
const register = async (req, res) => {
  try {
    // Get user input
    const { username, email, password } = req.body

    // Validate user input
    if (!username || !email || !password) {
      return res.status(StatusCodes.OK).json({
        message: 'Missing required fields',
        error: true
      })
    }

    // Validate if the user already exist
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(StatusCodes.OK).json({
        message: 'Email address already in use',
        error: true
      })
    }

    const existingUsername = await User.findOne({ username })
    if (existingUsername) {
      return res.status(StatusCodes.OK).json({
        message: 'Username already exist',
        error: true
      })
    }

    // Encrypt password
    const hashPassword = await bcrypt.hash(password, 10)

    // Create a user in our database.
    const user = await User.create({
      username,
      email,
      password: hashPassword
    })

    // Create a signed JWT token
    const token = jwt.sign(
      { userId: user._id, email, username },
      process.env.JWT_KEY,
      {
        expiresIn: '1d'
      }
    )

    res.status(StatusCodes.OK).json({
      username: user.username,
      email: user.email,
      token: 'Bearer ' + token
    })
  } catch (err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// login
const login = async (req, res) => {
  try {
    // Get user credentials
    const { email, password } = req.body

    // Validate user credentials
    if (!email || !password) {
      return res.status(StatusCodes.OK).json({
        message: 'Missing required fields',
        error: true
      })
    }

    // Validate if user exist
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(StatusCodes.OK).json({
        message: 'User not found',
        error: true
      })
    }

    // compare password
    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(StatusCodes.OK).json({
        message: 'Wrong password',
        error: true
      })
    }
    // Generate token
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        email: user.email
      },
      process.env.JWT_KEY,
      { expiresIn: '1d' }
    )

    // Response
    res.status(StatusCodes.OK).json({
      username: user.username,
      email: user.email,
      userId: user._id,
      token: 'Bearer ' + token
    })
  } catch (err) {
    console.log(err)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

module.exports = { login, register, getUsers }
