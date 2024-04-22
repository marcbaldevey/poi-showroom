<template>
  <div class="flex">
    <div class="w-28 h-28 aspect-square bg-slate-50 bg-opacity-40 md:bg-gray-100 rounded-3xl flex justify-center items-center p-1">
      <img :src="imgSrc" alt="Image" class="object-cover w-full" />
    </div>
    <div class="flex flex-col pl-3">
      <div class="flex items-center">
        <span
          class="rounded-full border border-solid border-primary-500 text-primary-500 flex items-center justify-center px-1 w-4 h-4 md:w-6 md:h-6 text-xs md:text-sm"
          >{{ stepNumber }}</span
        >
        <span class="ml-2 text-[15px] md:text-xl font-bold">{{ title }}</span>
      </div>
      <div>
        <p class="pt-2 text-sm text-left">{{ description }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stepNumber: {
    type: Number,
    required: true,
  },
});
</script>
<style></style>
