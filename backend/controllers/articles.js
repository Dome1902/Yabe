const { StatusCodes } = require('http-status-codes')
// const service = require('../services/articles')
const Article = require('../models/Article')

// get list of articles
const getArticles = async (req, res) => {
  try {
    const articles = await Article.find({})

    res.status(StatusCodes.OK).json(articles)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// get user's articles
const getUserArticle = async (req, res) => {
  try {
    const user = req.user
    const articles = await Article.find({ user: user.userId })

    res.status(StatusCodes.OK).json(articles)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// get articles available for bidding
const getAvailableArticles = async (req, res) => {
  try {
    const articles = await Article.find({ biddingEnabled: true })

    res.status(StatusCodes.OK).json(articles)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// search for article
const searchArticle = async (req, res) => {
  try {
    const { q } = req.query

    console.log(q)

    if (!q) return res.status(StatusCodes.OK).json([])

    const articles = await Article.find({ $text: { $search: q } })

    res.status(StatusCodes.OK).json(articles)
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// get artile by id
const getArticle = async (req, res) => {
  try {
    const { id } = req.params
    const article = await Article.findOne({ _id: id })

    res.status(StatusCodes.OK).json(article)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// create article
const createArticle = async (req, res) => {
  try {
    const user = req.user
    const { name, description, image } = req.body
    const articleInfo = { name, description, image, user: user.userId }

    if (!name || !description || !image) {
      return res.status(StatusCodes.OK).json({ message: 'Missing required fields', error: true })
    }

    const newArticle = await Article.create(articleInfo)

    res.status(StatusCodes.OK).json(newArticle)
  } catch (error) {
    console.log(error)
    res.status(StatusCodes.FORBIDDEN).json({ msg: 'No valid credential' })
  }
}

// modify article
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description, image } = req.body
    const articleInfo = { name, description, image }

    if (!name || !description || !image) {
      return res.status(StatusCodes.OK).json({ message: 'Missing required fields', error: true })
    }

    const article = await Article.findOne({ _id: id })
    if (!article) {
      return res.status(StatusCodes.OK).json({ message: 'article not found', error: true })
    }

    const updatedArticle = await Article.updateOne({ _id: id }, articleInfo, { new: true })

    res.status(StatusCodes.OK).json(updatedArticle)
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

// delete article
const deleteArticle = async (req, res) => {
  try {
    const { id } = req.params

    const article = await Article.findOne({ _id: id })
    if (!article) {
      return res.status(StatusCodes.OK).json({ message: 'article not found', error: true })
    }

    await Article.remove({ _id: id })

    res.status(StatusCodes.OK).json({ message: 'article deleted' })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: 'Server error!' })
  }
}

module.exports = {
  getArticles,
  getUserArticle,
  getAvailableArticles,
  searchArticle,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
}
