import http from '../axios'

class PostServices {

    getAllPosts(){
        return http.get("/posts")
    }

    createPost(data){
        return http.post('/posts', data)
    }

    updatePost(id){
        return http.put('/posts', id)
    }

    deletePost(id){
        console.log(id);
        return http.delete('/posts', id)
    }

    likePost(id){
        return http.patch('/posts', id)
    }
}

export default new PostServices();