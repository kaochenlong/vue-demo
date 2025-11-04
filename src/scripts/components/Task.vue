<script setup>
import { ref } from 'vue';

const task = ref('')
const emits = defineEmits(['add_task'])

const addTask = () => {
  if (task.value != '') {
    emits('add_task', task.value)
    task.value = ''
  }
}
</script>

<template>
  <section id="taskSection">
    <form id="todoForm">
      <input v-model="task" type="text" id="taskInput" autocomplete="off" spellcheck="false" placeholder="做點重要的事吧..." />
      <button @click="addTask" id="addTodoBtn">新增</button>
    </form>
  </section>
</template>
