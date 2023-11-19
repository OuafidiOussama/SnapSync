import {CREATE_POST, GET_POSTS} from '../actions/types'

const initialState = []

function postReducer(posts = initialState, action){
    const {type, payload} = action

    switch(type){
        case CREATE_POST:
            return [...posts, payload]
        
        case GET_POSTS:
            return payload

        default:
            return posts
    }
}

export default postReducer