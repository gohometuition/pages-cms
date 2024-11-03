<script setup>
import { RouterView } from 'vue-router'
export default {
  name: 'App',
  components: {
    RouterView
  }
}
</script>

<template>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/request-tutor">Request Tutor</a>
      <a href="/become-tutor">Become Tutor</a>
      <!-- Add other navigation items -->
    </nav>
  </header>

  <RouterView />

  <footer>
    <!-- Add footer content -->
  </footer>
</template>
