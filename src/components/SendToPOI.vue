<template>
  <div class="flex justify-center">
    <div class="card rounded-xl bg-surface-100 mt-8 w-4/5 flex">
      <div class="flex-auto">
        <label for="integeronly" class="font-bold block mb-2"> Width </label>
        <InputNumber v-model="width" :disabled="!isEmpty(selectedMaterial)" input-id="integeronly" input-class="bg-white w-32" />
        <Dropdown v-model="widthUnits" :disabled="!isEmpty(selectedMaterial)" :options="units" option-label="label" option-value="value" class="ml-3 w-28" />
      </div>
      <div class="flex-auto">
        <label for="integeronly" class="font-bold block mb-2"> Length </label>
        <InputNumber v-model="length" input-id="integeronly" input-class="bg-white" />
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-4">
    <Button ripple label="Send" class="w-52" />
  </div>
</template>
<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import { PropType, onBeforeMount, ref } from "vue";
import Button from "primevue/button";
import { Material } from "../types";
import { isEmpty } from "remeda";
import Dropdown from "primevue/dropdown";

const props = defineProps({
  selectedMaterial: {
    type: Object as PropType<Material>,
    required: true,
  },
});

const units = [
  { label: "cm", value: "cm" },
  { label: "m", value: "m" },
  { label: "in", value: "in" },
  { label: "ft", value: "ft" },
];
const width = ref(0);
const widthUnits = ref("cm");
const lengthUnits = ref("cm");

const length = ref(0);
onBeforeMount(() => {
  width.value = Number(props.selectedMaterial?.width || 0);
});
</script>
<style></style>
