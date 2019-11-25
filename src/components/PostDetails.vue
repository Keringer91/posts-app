<template>
  <div >
      {{post.title}}<br>
      {{post.id}}<br>
      {{post.body}}<br>
     
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
    
}
</script>

<style>

</style>
