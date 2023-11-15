const express = require('express')
const router = express.Router()
const {addPost, getAllPosts, likePost, updatePost, deletePost} = require('../controllers/postController')

router
    .route('/')
    .get(getAllPosts)
    .post(addPost)

router.put('/like/:id', likePost)
router.delete('/delete/:id', deletePost);
router.put('/update/:id', updatePost);

module.exports = router