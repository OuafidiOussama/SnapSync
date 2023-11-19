import http from '../axios'

class PostServices {

    getAll(){
        return http.get("/posts")
    }

    create(data){
        return http.post('/posts', data)
    }

    like(id){
        return http.patch('/posts', id)
    }
}

export default new PostServices();