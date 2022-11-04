<template>
  <input id="input" v-model="currentTodo" @keypress.enter="sendTodo" />
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emits = defineEmits(["new"]);

const currentTodo = ref<string>("");

const sendTodo = () => {
  if (!currentTodo.value) return;
  emits("new", currentTodo.value);
  currentTodo.value = ""
};
</script>

<style scoped>
#input {
  width: 100%;
  height: 30px;
  font-size: 20px;
}
</style>
