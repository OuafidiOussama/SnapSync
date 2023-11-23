import {CREATE_POST, GET_POSTS, LIKE_POST} from '../actions/types'

const initialState = []

function postReducer(posts = initialState, action){
    const {type, payload} = action

    switch(type){
        case CREATE_POST:
            return [...posts, payload]
        
        case GET_POSTS:
            return payload

        case LIKE_POST:
            return [...posts, payload]

        default:
            return posts
    }
}

export default postReducer