const Post = require('../models/PostModel')

addPost = async (req, res) =>
{
    try {
        const data = {
            creator: req.body.creator,
            title: req.body.title,
            message: req.body.message,
            tags: req.body.tags,
            picture: req.body.picture 
        }
        const post = await Post.create(data)
        res.status(201).json({
            success: true,
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

getAllPosts = async (req, res) =>
{
    try {
        const posts = await Post.find()
        res.status(201).json({
            success: true,
            posts: [posts]
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

likePost = async (req, res) =>
{
    try {
        const postId = req.params.id
        const post = await Post.findById({ _id: postId })
        if (post) {
            let newlikes = post.likes + 1
            const filter = { _id: postId }
            const update = { likes: newlikes }
            const newPost = await Post.findByIdAndUpdate(filter, update, { new: true })
            res.status(201).json({
                success: true,
                post: newPost
            })
        } else {
            res.status(400).json({
                success: false,
                message: "No Post Is Found"
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

updatePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const updatedPost = await Post.findOneAndUpdate(
        { _id: postId },
        req.body, // assuming req.body contains the updated post data
        { new: true }
      );

      if (updatedPost) {
        res.status(200).json({
          success: true,
          post: updatedPost,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Post not found',
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };


deletePost = async (req, res) =>
{
    try {
        const postId = req.params.id;
        const deletedPost = await Post.findByIdAndDelete({ _id: postId });

        if (deletedPost) {
            res.status(200).json({
                success: true,
                post: deletedPost,
            });

        } else {
            res.status(404).json({
                success: false,
                message: 'Post not found',
            });

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


module.exports = { addPost, getAllPosts, likePost, updatePost, deletePost }




