const multer = require('multer')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const { v4: uuidv4 } = require('uuid')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../storage/uploads/articles/'))
  },
  filename: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase()
    const filename = `article_${uuidv4() + extension}`
    cb(null, filename)
  }
})

const fileFilter = (req, file, callback) => {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/

  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  // Check mime
  const mimetype = filetypes.test(file.mimetype)

  if (mimetype && extname) {
    return callback(null, true)
  } else {
    // eslint-disable-next-line node/no-callback-literal
    callback('Error: Only images are allowed!')
  }
}

const upload = multer({ storage, fileFilter }).single('article_image')

const uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err)
      res.status(StatusCodes.OK).send({ message: err, error: true })
    }

    const { filename, path } = req.file
    res.status(StatusCodes.OK).json({
      filename,
      path: path.split('/storage')[1]
    })
  })
}

module.exports = { uploadImage }
