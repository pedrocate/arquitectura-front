<template>
  <div id="todo-item">
    <h1>{{ props.todo }}</h1>
    <button id="remove-button" @click="emits('remove', todo)">X</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  todo: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["remove"]);

</script>

<style>
#todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#remove-button {
  margin-left: 2px;
  height: fit-content;
}
</style>
