import { ref } from "vue"
import { defineStore } from "pinia"

const UserStore = defineStore("user_store", () => {
  const email = ref("")
  const token = ref("")

  return { email, token }
})

export { UserStore }
