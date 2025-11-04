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
        <a class="loginLink" href="#login">登入</a>
        <a class="signUpLink" href="#sign_up">註冊</a>
      </nav>
    </header>

    <section id="userSection">
      <!-- Login Section start -->
      <!-- Login Section end -->

      <!-- Sign Up Section start -->
      <!-- Sign Up Section end -->
    </section>

    <!-- TODO Section start -->
    <!-- TODO Section end -->
  </main>

  <section class="todo-list">
    <ul class="items">
      <!-- item start -->
      <li>
        <div class="item-content">
          <label>
            <input type="checkbox" />
            <p class="content">我要學 Python</p>
          </label>
        </div>
        <div class="item-control">
          <a href="#" class="edit">Edit</a>
          <a href="#" class="delete">Delete</a>
        </div>
      </li>
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
