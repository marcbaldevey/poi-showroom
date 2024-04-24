<template>
  <div class="w-full h-full flex flex-col justify-center items-center bg-surface-0 text-surface-900">
    <h2>Congratulations, your order #{{ orderId }} has been created!</h2>
    <a :href="orderURL" target="_blank">View your order</a>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  orderId: {
    type: String,
    required: true,
  },
});
const POI_FRONTEND_URL = import.meta.env.VITE_POI_FRONTEND_URL as string;
const POI_TOKEN = import.meta.env.VITE_POI_TOKEN as string;
const orderURL = `${POI_FRONTEND_URL}/home/orders/${props.orderId}?token=${POI_TOKEN}`;
</script>
<style></style>
