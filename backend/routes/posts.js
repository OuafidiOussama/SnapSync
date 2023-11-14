const express = require('express')
const router = express.Router()
const {addPost, getAllPosts} = require('../controllers/postController')

router
    .route('/')
    .get(getAllPosts)
    .post(addPost)
    


module.exports = router