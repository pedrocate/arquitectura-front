<template>
  <div id="container-todos">
    <TodoInput @new="addTodo" />
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @remove="removeTodo"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

const todos = ref<string[]>([]);

const addTodo = (todo: string) => {
  todos.value.push(todo);
};

const removeTodo = (todoToRemove: string) => {
  todos.value = todos.value.filter((todo) => todo !== todoToRemove);
};
</script>

<style scoped>
#container-todos {
  width: 400px;
  height: 600px;
}
</style>
