require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const swaggerUi = require('swagger-ui-express');

// swagger definition document
const swaggerDocument = require('./swagger.json');

// import routes
const usersRoutes = require('./routes/users')
const articlesRoutes = require('./routes/articles')
const bidsRoutes = require('./routes/bids')
const uploadsRoutes = require('./routes/uploads')

// article update cron job
const initUpdateArticleStatusCron = require('./lib/cron')

const PORT = process.env.PORT || 4000

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(express.json({ limit: '50mb' }))

// server static files
app.use(express.static(path.join(__dirname, './storage')))

app.get('/', (req, res) => res.json({ message: 'Auction Management API' }))

// swagger route
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// routes
app.use('/users', usersRoutes)
app.use('/articles', articlesRoutes)
app.use('/bids', bidsRoutes)
app.use('/uploads', uploadsRoutes)

// catch not found routes
app.get('*', (req, res) => res.status(404).json({ message: 'Resource Not Found' }))

// start cron job
initUpdateArticleStatusCron()

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log('Connected to DB!')
})

// start listening to the server
app.listen(PORT, () => console.log('API running on port ', PORT))
