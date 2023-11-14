const Post = require('../models/PostModel')

exports.addPost = async(req, res)=>{
    
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