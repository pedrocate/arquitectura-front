<template>
  <div id="container-todos">
    <TodoInput @new="addTodo" />
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      @do="doTodo"
    />
  </div>
</template>

<script setup lang="ts">
import Todo from "@/models/Todo";
import { ref } from "vue";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";

const todos = ref<Todo[]>([]);

const saveTodosInLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todoDescription: string) => {
  todos.value.push(new Todo(todoDescription, false));
  saveTodosInLocalStorage(todos.value);
};

const doTodo = (todoToDo: Todo) => {
  const todo = todos.value.find(
    (todo) => todo.description === todoToDo.description
  );
  todo?.do();
  saveTodosInLocalStorage(todos.value);
};
</script>

<style scoped>
#container-todos {
  width: 400px;
  height: 600px;
}
</style>
