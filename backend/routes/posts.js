const express = require('express')
const router = express.Router()
const {addPost, getAllPosts, likePost, updatePost, deletePost} = require('../controllers/postController')
const {authenticate, isLoggedIn} = require('../middleware/auth')

router
    .route('/')
    .get(getAllPosts)
    .post(addPost)
    .patch(authenticate, likePost)
router
    .route('/:id')
    .put(authenticate, updatePost)
    .delete(authenticate, deletePost)

router
    .route('/protected')
    .get(isLoggedIn, (req, res)=>{
        res.send('authenticated !!')
    })


module.exports = router