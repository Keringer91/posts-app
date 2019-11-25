import axios from 'axios';


export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
    }

    getPosts() {
        return axios.get('posts');
    }

    deletePost(posts,post) {
        posts.splice( posts.indexOf(post), 1 );
    }
    
}


export const postService = new  PostService();