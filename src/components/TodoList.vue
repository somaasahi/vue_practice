<template>
  <div class="child">
    <span>{{ msg }}</span><button v-on:click="myDelete">delete</button>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
      id:String,
    msg: String
  },

  methods: {
      
      myDelete: function () {
			this.$emit("deleteTodo", this.id);
		},
  }
}
</script>

<style scoped>

.child {
  background-color: #f0f8ff;
  margin-top:5px;
  margin-bottom: 5px;
  text-align: center;
}

span {
margin-right: 20px;
}


</style>
