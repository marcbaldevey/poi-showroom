<template>
  <div class="flex justify-center w-full h-full bg-white text-gray-700">
    <div class="h-full w-full max-w-7xl flex flex-col">
      <h2 class="text-left text-4xl my-8 text-primary-600 font-extrabold font-sans">Choose your design</h2>
      <Steps :model="items" :readonly="false" />
      <FileUpload />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import FileUpload from "../components/FileUpload.vue";
import Steps from "primevue/steps";

const items = ref([
  {
    label: "Upload File",
  },
  {
    label: "Choose material",
  },
  {
    label: "Send to POI",
  },
]);
</script>
<style></style>
