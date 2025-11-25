import { ref } from "vue"
import { defineStore } from "pinia"

const UserStore = defineStore("user_store", () => {
  // States
  const email = ref("")
  const token = ref("")
  const section = ref("login")

  // Actions
  const setUserData = (token, email) => {
    localStorage.setItem("__todo_token__", token)
    localStorage.setItem("__todo_email__", email)
  }

  const changeSection = (state = "login") => {
    if (["task", "login", "sign_up"].includes(state)) {
      section.value = state
    }
  }

  return { email, token, section, setUserData, changeSection }
})

export { UserStore }
