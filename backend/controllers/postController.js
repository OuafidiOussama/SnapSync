const Post = require('../models/PostModel')

addPost = async(req, res)=>{
    try {
        const post = await Post.create(req.body)
        res.status(201).json({
            success : true,
            post: post
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

getAllPosts = async (req, res)=>{
    try {
        const posts = await Post.find()
        res.status(201).json({
            success : true,
            posts: posts
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {addPost, getAllPosts}




