<template>
  <div id="todo-item">
    <h1 :class="{ done: todo.done }">{{ props.todo.description }}</h1>
    <button id="remove-button" :disabled="todo.done" @click="emits('do', todo)">
      X
    </button>
  </div>
</template>

<script setup lang="ts">
import Todo from "@/Todo/domain/Todo";
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  todo: {
    type: Todo,
    required: true,
  },
});

const emits = defineEmits(["do"]);
</script>

<style>
#todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#remove-button {
  height: fit-content;
}

.done {
  text-decoration: line-through;
}
</style>
