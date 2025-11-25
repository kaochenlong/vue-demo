<script setup>
import { ref } from "vue"
import Login from "%/Login.vue"
import SignUp from "%/SignUp.vue"
import Task from "%/Task.vue"
import TodoItem from "%/TodoItem.vue"
import { UserStore } from '@/scripts/stores/UserStore';

const store = UserStore()

const todos = ref([])

const gotoLogin = () => store.changeSection('login')
const gotoSignUp = () => store.changeSection('sign_up')

const addTask = (task) => {
  if (task != '') {
    todos.value.unshift(task)
  }
}
</script>

<template>
  <header class="banner">
    <h1><a href="#todo" class="taskLink">TODO!</a></h1>
    <div class="subtitle">
      <p class="text">Simple and Stupid TODO App</p>
      <p class="hidden text sm:block">
        powered by
        <a href="https://5xcampus.com" class="text-link" target="_blank">5xCampus</a>
        |
        <a href="https://todoo.5xcamp.us" class="text-link" target="_blank">API</a>
        |
        <a href="https://github.com/5xTraining/todoo-app" class="text-link" target="_blank">GitHub</a>
      </p>
    </div>
  </header>

  <main class="px-6 todo-app main">
    <header>
      <nav class="navbar">
        <a @click="gotoLogin" class="loginLink" href="#login">登入</a>
        <a @click="gotoSignUp" class="signUpLink" href="#sign_up">註冊</a>
      </nav>
    </header>

    <section id="userSection">
      <!-- Login Section start -->
      <Login v-if="store.section == 'login'"></Login>
      <!-- Login Section end -->

      <!-- Sign Up Section start -->
      <SignUp v-if="store.section == 'sign_up'"></SignUp>
      <!-- Sign Up Section end -->
    </section>

    <!-- TODO Section start -->
    <Task v-if="store.section == 'task'"></Task>
    <!-- TODO Section end -->
  </main>

  <section class="todo-list">
    <ul class="items">
      <!-- item start -->
      <TodoItem v-for="todo in todos" :todo="todo"></TodoItem>
      <!-- item end -->
    </ul>
  </section>
  <footer>
    <p>
      powered by
      <a href="https://5xcampus.com" class="underline">5XCAMPUS</a> | <a href="https://todoo.5xcamp.us" class="underline">API</a> |
      <a href="https://github.com/5xTraining/todoo-app" class="underline">SOURCE</a>
    </p>
  </footer>
</template>
