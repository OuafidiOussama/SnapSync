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

likePost = async (req,res) =>{
    try {
        const postId = req.params.id
        const post = await Post.findById({_id: postId})
        if (post) {
            let newlikes = post.likes + 1
            const filter = {_id: postId}
            const update = {likes: newlikes}
            const newPost = await Post.findByIdAndUpdate(filter, update, {new: true})
            res.status(201).json({
                success : true,
                post: newPost
            })
        }else {
            res.status(400).json({
                success : false,
                message : "No Post Is Found"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {addPost, getAllPosts, likePost}




