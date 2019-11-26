<template>
  <div>
    <AddNewPost @addNewPost = "addNewPost"></AddNewPost>  
    <ul v-for="(post, index) in posts" :key="index">
        <li>
            <PostDetails :post = "post" @deletePost = "deletePost">
            </PostDetails>
        </li>
    </ul>
  </div>
</template>

<script>
import { postService } from '../services/PostService'
import PostDetails from '../components/PostDetails.vue'
import AddNewPost from  '../components/AddNewPost.vue'

export default {
    components: {
      PostDetails,
      AddNewPost  
    },
    data () {
        return {
            posts: []
        }
    },
    methods: {
        deletePost(post) {
            postService.deletePost(this.posts, post);
        },
       addNewPost(post) {
            postService.addNewPost(this.posts, post);
        }
    },
    created() {
        postService.getPosts().then(response => {
            this.posts = response.data;
        })
    }
}
</script>

<style>

</style>
