<template>
  <div >
      {{post.title}}<br>
      {{post.id}}<br>
      {{post.body}}<br>
      <button @click="deletePost(post)">Delete post</button>
  </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    methods: {
        deletePost(post) {
            this.$emit('deletePost', post);
        }
    }
    
}
</script>

<style>

</style>
