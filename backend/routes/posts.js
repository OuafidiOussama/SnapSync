const express = require('express')
const router = express.Router()
const {addPost} = require('../controllers/postController')

router
    .post('/', addPost)
    


module.exports = router