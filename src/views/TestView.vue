<template>
  <div class="area">
    <h1>Todo List</h1>
    <span>new todo:</span><input type="text" v-model="myInput"><button v-on:click="add">add</button><br />
    
    
    <div class="box">
        <TodoList v-for="(todo) in todos" 
        :key="todo.id" 
        v-bind:msg="todo.item" 
        v-bind:id="todo.id"
        @deleteTodo="deleteTodo"></TodoList>
    </div>
  </div>
</template>

<script>
import TodoList from '../components/TodoList.vue';

function getUniqueId() {
	return Math.random().toString(36).substr(2, 9);
}

export default {
    name: "TestView",
    components: {
    TodoList
    },
    data: function () {
        return {
            myInput: "",
            todos: [],
        };
    },
    

    methods: {
        add:function () {
            if(this.myInput == ""){
                alert("no data");
                return;
            }
            if(this.myInput == "takagi"){
                alert("高木は不適切です");
                return;
            }

            var todo = {
                id: getUniqueId(),
                item: this.myInput
            };

            this.todos.push(todo);

            this.myInput = "";
        },
        deleteTodo: function (id) {
            this.todos = this.todos.filter(function (todo) {
				return todo.id !== id;
			});
        }
        

    }
}
</script>
<style scoped>
.area {
border: 1px grey;
border-radius: 5px;
width:50%;
}
.box {
  padding: 10px;
}
</style>