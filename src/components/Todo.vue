<template>
  <!-- <span :class="{completed: todo.completed}" @click="completedStatuTodo(todo)" >{{ todo.title }}</span> -->
  <!-- <button @click="deleteTodo(todo)">delete</button> -->
   <li class="todo list-group-item" >
    <div class="row todo_liste">
      <span class="col-sm-10">
        <input
          type="checkbox"
          v-model="todo.completed"
          class="toggle"
          @click="completedStatuTodo(todo)"
        />
        <p class="title" :class="{'completed': todo.completed }" @click="completedStatuTodo(todo)" > {{ todo.title }}  </p>
      </span>
      <button
        @click.prevent="deleteTodo(todo)"
        class="del col btn btn-dark btn-sm"
      >
        supp
      </button>
    </div>
   </li>
    <!-- <input type = "text" class = "edit form-control" v-model = "todo.name" @keyup.esc = "cancelEdit" @keyup.enter = "doneEdit" v-focus = "todo === editing" @blur = " doneEdit "> -->

</template>


<script>
import { mapActions } from "vuex";
export default {
  props: ["todo"],
  methods: {
    ...mapActions({
      deleteTodo: "deleteTodo",
      completedStatuTodo: "completedStatuTodo",
    }),
  },
};
</script>

<style>
.completed {
  text-decoration: line-through;
}

</style>