const express = require('express')
const router = express.Router()
const {addPost, getAllPosts, likePost, updatePost, deletePost} = require('../controllers/postController')
const {isLoggedIn} = require('../middleware/auth')

router
    .route('/')
    .get(getAllPosts)
    .post(addPost)
    .patch(likePost)
    .put(updatePost)
    .delete(deletePost)

router
    .route('/protected')
    .get(isLoggedIn, (req, res)=>{
        res.send('authenticated !!')
    })


module.exports = router