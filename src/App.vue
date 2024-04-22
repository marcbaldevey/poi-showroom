<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <router-view />
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: none;
  margin: 0 auto;
  padding: 0rem;
  text-align: center;
}
body,
html {
  height: 100%;
}
</style>
