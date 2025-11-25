import { ref } from "vue"
import { defineStore } from "pinia"

type SectionState = "task" | "login" | "sign_up"

const UserStore = defineStore("user_store", () => {
  // States
  const email = ref("")
  const token = ref("")
  const section = ref("login")

  // Actions
  const setUserData = (token: string, email: string): void => {
    localStorage.setItem("__todo_token__", token)
    localStorage.setItem("__todo_email__", email)
  }

  const changeSection = (state: SectionState): void => {
    section.value = state
  }

  return { email, token, section, setUserData, changeSection }
})

export { UserStore }
