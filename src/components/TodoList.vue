<template>
  <div>
    <div>
      <ul class="list-group">
        <label id="select_all" class="chec form-check-label">
          <input
            type="checkbox"
            class="toggle-all form-check-input"
            v-model="allDone"
          />
          select all
        </label>

        <Todo
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :todo="todo"
        />
      </ul>
      <div v-if="completedTodosLength">
        <button
          class="btn btn-sm btn-block btn-danger"
          @click.prevent="deletAllTodoCompleted"
        >
          select suprimer les taches finies ({{ completedTodosLength }})
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

import Todo from "./Todo";

export default {
  props: {
    filter: String,
  },
  components: {
    Todo,
  },
  computed: {
    ...mapState({
      todos: "todos",
    }),

    filteredTodos() {
      if (this.filter === "todo") {
        return this.todos.filter((todo) => !todo.completed);
      } else if (this.filter === "done") {
        return this.todos.filter((todo) => todo.completed);
      }
      return this.todos;
    },
    ...mapGetters({
      completedTodosLength: "completedTodosLength",
      pendingTodosLength: "pendingTodosLength",
      pendingTodos: "pendingTodos",
    }),
    allDone: {
      get() {
        return this.pendingTodosLength === 0;
      },
      set(value) {
        if (value == true) {
          this.pendingTodos.forEach((todo) => {
            // todo.completed = value
            this.completedStatuTodo(todo);
            // todo.completed = value
          });
        }
        if (value == false)
          this.todos.forEach((todo) => {
            // todo.completed = value
            this.completedStatuTodo(todo);
            // todo.completed = value
          });

        console.log("value : ", value);
      },
    },
  },
  methods: {
    ...mapActions({
      deletAllTodoCompleted: "deletAllTodoCompleted",
      completedStatuTodo: "completedStatuTodo",
    }),
  },
};
</script>