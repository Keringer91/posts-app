<template>
  <div >
    <h5>Add a new post: </h5>
    <form @submit.prevent>
        <table>
            <tr>
            <td><label>Title:</label></td>
            <td><input v-model = "post.title" type="text" id="title"></td>
            </tr>
            <tr>
            <td><label>Text:</label></td>
            <td><input v-model = "post.body" type="text" id="body"></td>
            </tr>
        </table>  
      <button @click="addNewPost" type="submit">Submit</button>
    </form> 
  </div>
</template>

<script>
export default {
    data() {
     return {
            post: {}
        }
    },
    methods: {
      addNewPost() {
          this.$emit('addNewPost', this.post);
          this.post = {};
      }
    }
    
}
</script>

<style>

</style>
