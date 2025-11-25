<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { UserStore } from '@/scripts/stores/UserStore';

const store = UserStore()

const email = ref("")
const password = ref("")

async function Login() {
  if (email.value != '' && password.value != '') {
    const userData = {
      user: {
        email: email.value,
        password: password.value
      }
    }

    try {
      const result = await axios.post('https://todoo.5xcamp.us/users/sign_in', userData)
      const token = result.headers.authorization
      store.setUserData(token, email.value)
      store.changeSection('task')
    } catch (err) {
      console.log(err);
    }
  }
}
</script>

<template>
  <section id="loginSection">
    <h1>登入</h1>
    <form id="loginForm">
      <div class="field">
        <label>
          <h3>Email</h3>
          <input v-model="email" type="email" id="loginEmail" autocomplete="email" spellcheck="false" placeholder="Email 信箱" />
        </label>
      </div>

      <div class="field">
        <label>
          <h3>密碼</h3>
          <input v-model="password" type="password" id="loginPassword" autocomplete="current-password" spellcheck="false" placeholder="密碼，至少需要 6 個字" />
        </label>
      </div>

      <div class="items-center justify-between block sm:flex field">
        <button @click.prevent="Login">登入</button>
        <div class="text-xl text-gray-600">還沒有帳號嗎？<a href="#" class="text-link signUpLink">註冊</a>一個吧！</div>
      </div>
    </form>
  </section>
</template>
