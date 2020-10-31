<template>
  <div  class="todo_body">
    <div>
      <header>
        <div class="menu_btn btn-group-horizontal">
          <a
            href="#"
            class="btn btn-light"
            :class="{ active: filter === 'all' }"
            @click.prevent="filter = 'all'"
          >
            Toutes
            <span class="btn-success notification"> {{ allTodos }} </span>
          </a>
          <a
            href="#"
            class="btn btn-light"
            :class="{ active: filter === 'todo' }"
            @click.prevent="filter = 'todo'"
          >
            A faire
            <span class="btn-success notification"> {{ pendingTodosLength }} </span>
          </a>
          <a
            href="#"
            class="btn btn-light"
            :class="{ active: filter === 'done' }"
            @click.prevent="filter = 'done'"
          >
            Faites
            <span class="btn-success notification">
              {{ completedTodosLength }}
            </span>
          </a>
        </div>
        <TodoForm />
      </header>
      <TodoList :filter="filter"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default {
  name: "app",
  data: function () {
    return {
      filter: "all",
    };
  },
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    ...mapGetters({
      completedTodosLength: "completedTodosLength",
      pendingTodosLength: "pendingTodosLength",
    }),
    allTodos() {
      return this.completedTodosLength + this.pendingTodosLength;
    },
  },
};
</script>


<style>
@import "./assets/style.css";
</style>