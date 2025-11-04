<script setup>
defineProps({
  todo: String,
})
</script>

<template>
  <li>
    <div class="item-content">
      <label>
        <input type="checkbox" />
        <p class="content">{{ todo }}</p>
      </label>
    </div>
    <div class="item-control">
      <a href="#" class="edit">Edit</a>
      <a href="#" class="delete">Delete</a>
    </div>
  </li>
</template>
