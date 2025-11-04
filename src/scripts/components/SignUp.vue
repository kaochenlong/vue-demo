<script setup>
import { ref } from 'vue';

const email = ref("")
const nickname = ref("")
const password = ref("")

function SignUp() {
  // API
}
</script>

<template>
  <section id="signUpSection">
    <h1>註冊帳號</h1>
    <form id="signUpForm">
      <div class="field">
        <label>
          <h3>Email</h3>
          <input v-model="email" type="email" id="signUpEmail" autocomplete="email" spellcheck="false" placeholder="Email 信箱" />
        </label>
      </div>

      <div class="field">
        <label>
          <h3>暱稱</h3>
          <input v-model="nickname" type="text" id="signUpNickname" autocomplete="name" spellcheck="false" placeholder="要怎麼稱呼你呢？" />
        </label>
      </div>

      <div class="field">
        <label>
          <h3>密碼</h3>
          <input
            v-model="password"
            type="password"
            id="signUpPassword"
            autocomplete="new-password"
            spellcheck="false"
            placeholder="密碼，至少需要 6 個字"
          />
        </label>
      </div>

      <div class="items-center justify-between block sm:flex field">
        <button @click="SignUp">註冊</button>
        <div class="text-xl text-gray-600">已經有帳號了？<a href="#" class="text-link loginLink">登入</a></div>
      </div>
    </form>
  </section>
</template>
