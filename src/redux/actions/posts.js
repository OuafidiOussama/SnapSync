import {CREATE_POST, GET_POSTS, LIKE_POST} from './types'
import postsService from '../services/posts.service'

export const createPost = (creator, title, message, tags, picture)=> async(dispatch)=>{
    try{
        const res = await postsService.create({creator, title, message, tags, picture})

        dispatch({
            type: CREATE_POST,
            payload: res.data
        })
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}

export const getAllPosts = ()=> async(dispatch)=>{
    try{
        const res = await postsService.getAll()

        dispatch({
            type: GET_POSTS,
            payload: res.data.posts
        })
        // console.log(res.data.posts);
        return Promise.resolve(res.data.posts)
    }catch(err){
        return Promise.reject(err)
    }
}

export const Like = (id)=> async(dispatch)=>{
    try {
        const res = await postsService.like(id)
        dispatch({
            type: LIKE_POST,
            payload: res.data.likes
        })
        // console.log(res.data.likes);
        return Promise.resolve(res.data.likes)
    } catch (error) {
        return Promise.reject(error)
    }
}