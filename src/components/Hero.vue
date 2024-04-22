<template>
  <section class="sm:h-full flex">
    <div class="w-full md:w-3/6 flex text-gray-700 items-center text-center p-10 z-10">
      <section class="w-full">
        <span class="block text-3xl md:text-6xl font-sans font-bold mb-1">Send your designs to</span>
        <div
          class="bg-clip-text text-5xl md:text-6xl text-transparent bg-opacity-10 font-extrabold mb-3 backdrop-blur-sm"
          style="background-image: url(&quot;src/assets/hero.jpg&quot;); background-position: center"
        >
          Web to Print Community
        </div>
        <p class="mt-0 mb-4">This is a demo showroom to demonstrate how you can send your designs to your web to print community account.</p>
        <Button
          label="Start sending"
          class="text-white bg-primary-700 hover:bg-primary-800 hover:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          @click="router.push('/send-file')"
        ></Button>
      </section>
    </div>
    <div class="w-full opacity-35 md:opacity-100 absolute md:static md:w-3/6 h-full flex justify-end">
      <img src="../assets/hero.jpg" alt="Image" class="object-cover w-full md:w-4/5 2xl:w-full md:clip-polygon-12" />
    </div>
  </section>
</template>
<script lang="ts" setup>
import Button from "primevue/button";
import router from "../router";
</script>
<style></style>
