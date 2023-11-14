const express = require('express')
const router = express.Router()
const {addPost, getAllPosts, likePost} = require('../controllers/postController')

router
    .route('/')
    .get(getAllPosts)
    .post(addPost)

router.put('/like/:id', likePost)


module.exports = router