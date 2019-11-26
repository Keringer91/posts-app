import axios from 'axios';


export default class PostService {
    constructor() {
        axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'
    }

    getPosts() {
        return axios.get('posts');
    }

    deletePost(posts, post) {
        posts.splice( posts.indexOf(post), 1 );
    }

    addNewPost(posts, post) {
        post.id = posts[posts.length - 1].id + 1;
        posts.push(post);
    }
}


export const postService = new  PostService();