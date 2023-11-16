import React from 'react';
import PostCard from './PostCard';
import { useEffect, useState } from "react"
import axios from 'axios';

export const PostContainer = () => {
  const [posts, setPosts] = useState('')
  const getPosts = async ()=>{
    await axios.get("http://localhost:5000/api/posts")
    .then(res=>{
      setPosts(res.data.posts)
      // console.log(res.data.posts[0]);
    }).catch(err=> console.error(err))
  }
  useEffect(()=>{
    getPosts()
  }, [])
  return (
    <div className="w-9/12 flex gap-5 flex-wrap">
      {
        posts[0]?.map(post=> <PostCard post={post} key={post._id}/>)
      }
    </div>
  );  
}
