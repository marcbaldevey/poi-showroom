<template>
  <div class="bg-white dark:bg-gray-900 flex flex-col justify-start h-full w-full">
    <Hero class="max-h-[35rem] rounded-3xl overflow-hidden m-0 md:mx-4" />
    <div class="flex justify-center w-full">
      <div class="max-w-screen-2xl h-full text-gray-950 md:text-gray-800 flex flex-col md:flex-row justify-between p-5 sm:p-20 pt-0 md:pt-20 text-left z-10">
        <Step1 class="pb-5 md:pb-0 md:pl-20 flex-1" />
        <Step2 class="pb-5 md:pb-0 md:pl-20 flex-1" />
        <Step3 class="pb-5 md:pb-0 md:pl-20 flex-1" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Hero from "../components/Hero.vue";
import Step1 from "../components/Step1.vue";
import Step2 from "../components/Step2.vue";
import Step3 from "../components/Step3.vue";
</script>
<style></style>
