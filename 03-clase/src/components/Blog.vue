<template>
  <div class="posts">
    <h1>Bienvenidos a mi blog {{ this.$route.params.postId }}</h1>
    <div class="post" v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Blog',
  // data() {
  //   return {
  //     posts: [
  //       {
  //         id: 1,
  //         title: 'Post 1',
  //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  //       },
  //       {
  //         id: 2,
  //         title: 'Post 2',
  //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  //       },
  //     ]
  //   }
  // },
}
</script>

<style>

</style>