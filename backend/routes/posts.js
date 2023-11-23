const express = require('express')
const router = express.Router()
const {addPost, getAllPosts, likePost, updatePost, deletePost} = require('../controllers/postController')
const {isLoggedIn} = require('../middleware/auth')

router
    .route('/')
    .get(getAllPosts)
    .post(addPost)
    .patch(likePost)

router
    .route('/protected')
    .get(isLoggedIn, (req, res)=>{
        res.send('authenticated !!')
    })

// router.patch('/like', likePost)
router.delete('/delete/:id', deletePost);
router.put('/update/:id', updatePost);

module.exports = router