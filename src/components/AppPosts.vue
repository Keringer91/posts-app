<template>
  <div>
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

export default {
    components: {
      PostDetails  
    },
    data () {
        return {
            posts: []
        }
    },
    methods: {
        deletePost(post) {
            postService.deletePost(this.posts, post);
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
