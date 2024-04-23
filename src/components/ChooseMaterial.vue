<template>
  <div class="card flex justify-center">
    <DataView :value="materials" data-key="id" class="w-4/5">
      <template #list="slotProps">
        <div class="flex flex-wrap">
          <div v-for="(material, index) in slotProps.items" :key="index" class="w-full p-3">
            <div
              class="flex flex-col xl:flex-row xl:items-start p-4 gap-4 h-full cursor-pointer"
              :class="{
                'border-t border-surface-200 dark:border-surface-700': index !== 0,
                'bg-green-50 bg-opacity-50 ring-offset-2 ring-2 ring-green-600': isSelected(material),
              }"
              @click="selectedMaterial = material"
            >
              <img
                class="aspect-video w-9/12 sm:w-[16rem] xl:w-[10rem] shadow-md block xl:block mx-auto rounded"
                :src="`src/assets/${material.sku}.jpg`"
                :alt="material.name"
              />
              <div class="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4 h-full">
                <div class="flex flex-col items-center sm:items-start gap-3">
                  <div class="text-2xl font-bold text-surface-900 dark:text-surface-0">{{ material.name }}</div>
                  <div class="flex items-center gap-3">
                    <span class="flex items-center gap-2">
                      <i class="pi pi-arrows-h"></i>
                      <span class="font-semibold">{{ material.width }} {{ material.units }}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div v-if="isSelected(material)" class="flex sm:flex-col items-center justify-center sm:items-end gap-3 sm:gap-2 h-full">
                <i class="pi pi-check-circle text-green-600 text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { getMaterials } from "../services/poi.services";
import DataView from "primevue/dataview";
import { Material } from "../types";

const materials = ref<Material[]>([]);
const selectedMaterial = defineModel<Material>("selectedMaterial", { required: true });

const isSelected = (material: Material) => {
  return selectedMaterial.value?.id === material.id;
};

getMaterials().then((res) => {
  console.log(res);

  materials.value = res;
});
</script>
<style></style>
