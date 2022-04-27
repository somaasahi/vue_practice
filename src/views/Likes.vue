<template>
  <div class="likebox">
    <p>your likes</p>
    <img v-for="(like, key) in $store.state.likes" 
                :key="key" :src="like.url" v-on:click="dislike(like.id)">
  </div>
</template>

<script>

export default {
  name: 'LikesView',
  methods: {
      dislike: function (id) {
        
            this.$store.commit('disLikes', id);
        }
  }
 
}
</script>

<style scoped>

.likebox {
height:700px;
width:100%;
background-color:#ffe4e1 ;
padding: 5px;
}

img {
  height: 20%;
  width: auto;
  margin: 10px;
}
</style>