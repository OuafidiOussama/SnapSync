import {CREATE_POST, DELETE_POST, GET_POSTS, LIKE_POST, UPDATE_POST} from './types'
import postsService from '../services/posts.service'

export const createPost = (creator, title, message, tags, picture)=> async(dispatch)=>{
    try{
        const res = await postsService.createPost({creator, title, message, tags, picture})

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
        const res = await postsService.getAllPosts()

        dispatch({
            type: GET_POSTS,
            payload: res.data.posts
        })
        return Promise.resolve(res.data.posts)
    }catch(err){
        return Promise.reject(err)
    }
}

export const updatePost = (id) => async(dispatch)=>{
    try {
        const res = await postsService.updatePost(id)

        dispatch({
            type: UPDATE_POST,
            payload: res.data
        })
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const deletePost = (id) => async(dispatch)=>{
    console.log(id.id);
    try {
        const res = await postsService.deletePost(id.id)

        dispatch({
            type: DELETE_POST,
            payload: res.data
        })
        console.log(res.data);
        return Promise.resolve(res.data)
    } catch (err) {
        return Promise.reject(err)
    }
}

export const Like = (id) => async(dispatch)=>{
    try {
        const res = await postsService.likePost(id)
        dispatch({
            type: LIKE_POST,
            payload: res.data.likes
        })
        return Promise.resolve(res.data.likes)
    } catch (error) {
        return Promise.reject(error)
    }
}