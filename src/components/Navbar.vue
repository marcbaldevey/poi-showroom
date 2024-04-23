<template>
  <nav class="h-24 bg-white flex items-end pl-2">
    <img src="../assets/inedit_logo_gris.png" alt="" class="cursor-pointer h-20 p-4 pb-8" @click="router.replace('/')" />
    <img src="../assets/efi_reggiani_logo.png" alt="" class="cursor-pointer h-24 p-1" @click="router.replace('/')" />
  </nav>
</template>
<script lang="ts" setup>
import router from "../router";
</script>
<style></style>
