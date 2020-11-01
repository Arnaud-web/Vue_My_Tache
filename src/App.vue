<template>
  <div>
    <MyTodo />
    <MyTodo />
  </div>
</template>

<script>
import MyTodo from "./MyTodo";
export default {
  name: "app",
  components: {
    MyTodo,
  },
};
</script>