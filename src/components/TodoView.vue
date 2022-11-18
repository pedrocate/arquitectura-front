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
import { ref } from "vue";
import TodoInput from "./TodoInput.vue";
import TodoItem from "./TodoItem.vue";
import Todo from "@/models/Todo";
import useTodo from "@/plugins/todoUseCases";

const { addTodo: addTodoUseCase, doTodo: doTodoUseCase } = useTodo();

const todos = ref<Todo[]>([]);

const addTodo = (description: string) => {
  const newTodo: Todo = addTodoUseCase(description);

  if (newTodo) {
    todos.value.push(newTodo);
  }
};

const doTodo = (todo: Todo) => {
  doTodoUseCase(todo);
};
</script>

<style scoped>
#container-todos {
  width: 400px;
  height: 600px;
}
</style>
