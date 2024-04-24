<template>
  <div class="flex justify-center w-full h-full bg-white text-gray-700 p-10">
    <div class="h-full w-full max-w-7xl flex flex-col">
      <h2 class="text-left text-4xl my-8 text-primary-600 font-extrabold font-sans">Choose your design</h2>
      <Steps
        v-model:activeStep="activeIndex"
        :model="items"
        :readonly="false"
        class="send-file-steps"
        :pt="{
          menuitem: {
            class:
              'relative flex justify-center flex-1 overflow-hidden before:border-t before:border-primary-500 before:dark:border-surface-700 before:w-full before:absolute before:top-1/2 before:left-0 before:transform before:-mt-4',
          },
        }"
      >
        <template #item="{ item, active }">
          <div class="flex flex-col items-center">
            <span
              :class="[
                'inline-flex items-center justify-center  rounded-full border-primary-500 border-2 h-12 w-12 z-10 cursor-pointer',
                { 'bg-primary-500 text-slate-100': active, 'bg-white text-primary-500': !active },
              ]"
            >
              <i :class="[item.icon, 'text-xl']" />
            </span>
            <span class="text-sm font-semibold text-primary-500">{{ item.label }}</span>
          </div>
        </template>
      </Steps>
      <FileUpload v-if="activeIndex == 0" v-model:files="files" />
      <ChooseMaterial v-if="activeIndex == 1" v-model:selectedMaterial="selectedMaterial" />
      <SendToPOI v-if="activeIndex == 2" :selected-material="selectedMaterial" :file="files[0]" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Steps from "primevue/steps";
import FileUpload from "../components/FileUpload.vue";
import ChooseMaterial from "../components/ChooseMaterial.vue";
import SendToPOI from "../components/SendToPOI.vue";
import { Material } from "../types";

const activeIndex = ref(0);
const selectedMaterial = ref<Material>({} as Material);
const files = ref<File[]>([]);
const items = ref([
  {
    label: "Upload File",
    icon: "pi pi-upload",
  },
  {
    label: "Choose material",
    icon: "pi pi-image",
  },
  {
    label: "Send to POI",
    icon: "pi pi-send",
  },
]);
</script>
<style>
.send-file-steps li::before {
  transform: translateY(6px);
}
</style>
