<template>
  <div class="flex justify-center">
    <div class="card rounded-xl bg-surface-50 mt-8 w-4/5 flex flex-col">
      <h3 class="w-full text-left mb-6 font-semibold">Select width and length of the order</h3>
      <div class="flex">
        <div class="flex-auto">
          <label for="integeronly" class="font-bold block mb-2"> Width </label>
          <InputNumber v-model="width" :disabled="!isEmpty(selectedMaterial)" input-id="integeronly" input-class="w-32" />
          <Dropdown v-model="widthUnits" :disabled="!isEmpty(selectedMaterial)" :options="units" option-label="label" option-value="value" class="ml-3 w-28" />
        </div>
        <div class="flex-auto">
          <label for="integeronly" class="font-bold block mb-2"> Length </label>
          <InputNumber v-model="length" input-id="integeronly" input-class="w-32" />
          <Dropdown v-model="lengthUnits" :options="units" option-label="label" option-value="value" class="ml-3 w-28" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-4">
    <Button icon="pi pi-send" ripple :label="label" :loading="sending" class="w-52" @click="send" />
  </div>
</template>
<script lang="ts" setup>
import InputNumber from "primevue/inputnumber";
import { PropType, onBeforeMount, ref } from "vue";
import Button from "primevue/button";
import { Material, Order } from "../types";
import { isEmpty } from "remeda";
import Dropdown from "primevue/dropdown";
import { createNewOrder, uploadOrderItemFile } from "../services/poi.services";
import router from "../router";

const sending = ref(false);
const label = ref("Send");
const props = defineProps({
  selectedMaterial: {
    type: Object as PropType<Material>,
    required: true,
  },
  file: {
    type: Object,
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

const send = () => {
  sending.value = true;
  label.value = "Creating order...";
  createNewOrder({
    name: `New Order ${props.file?.name || ""} `,
    orderItems: [
      {
        materialId: props.selectedMaterial.id,
        width: width.value,
        widthUnits: widthUnits.value,
        length: length.value,
        lengthUnits: lengthUnits.value,
        quantity: 1,
      },
    ],
  } as Order)
    .then((newOrder) => {
      if (newOrder.orderItems.length > 0) {
        label.value = "Uploading file...";
        const item = newOrder.orderItems[0];
        sending.value = true;
        uploadOrderItemFile(item.id, props.file as File)
          .then(() => {
            router.push("/order-created/" + newOrder.id);
          })
          .finally(() => {
            sending.value = false;
          });
      }
    })
    .catch(() => {
      sending.value = false;
    });
};
</script>
<style></style>
