<template>
  <div class="card h-2/4">
    <FileUpload
      name="demo[]"
      :multiple="false"
      accept="image/*"
      :max-file-size="50000000"
      class="p-fileupload h-full"
      :pt="{ root: { class: 'h-full' }, content: { class: 'p-fileupload-content h-full bg-surface-50 border border-bg-surface-200' } }"
      @upload="onTemplatedUpload()"
      @select="onSelectedFiles"
    >
      <template #header="{ chooseCallback, clearCallback, files }">
        <div class="flex justify-between items-center flex-1 gap-2 p-fileupload-buttonbar">
          <div class="flex gap-2">
            <Button class="h-10" style="width: 2.5rem !important" icon="pi pi-images" severity="info" rounded outlined @click="chooseCallback()"></Button>

            <Button
              class="h-10"
              style="width: 2.5rem !important"
              icon="pi pi-times"
              rounded
              outlined
              severity="danger"
              :disabled="!files || files.length === 0"
              @click="clearCallback()"
            ></Button>
          </div>
          <ProgressBar
            :value="totalSizePercent"
            :show-value="false"
            :class="['progressbar md:w-80 h-4 w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
          >
            <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
          </ProgressBar>
        </div>
      </template>
      <template #content="{ files }">
        <div v-for="file of files" :key="file.name + file.type + file.size" class="m-0 p-0 flex flex-col w-full h-full items-start">
          <img v-if="brokenImage" class="object-contain w-full flex-1 min-h-0 rounded-xl" role="presentation" :alt="file.name" src="/no-image.svg" />
          <img v-else class="object-cover w-full flex-1 min-h-0 rounded-xl" role="presentation" :alt="file.name" :src="objectURL(file)" @error="useFallbackImage" />
          <div class="flex items-end py-2">
            <span class="font-semibold">{{ file.name }}</span>
            <span class="ml-2 text-sm">({{ formatSize(file.size) }})</span>
          </div>
        </div>
      </template>
      <template #empty>
        <div class="flex items-center justify-center flex-col">
          <i class="pi pi-cloud-upload border-2 rounded-full p-5 text-8xl text-surface-400 border-surface-400" />
          <p class="mt-4 mb-0">Drag and drop files to here to upload.</p>
        </div>
      </template>
    </FileUpload>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";
import FileUpload, { FileUploadSelectEvent } from "primevue/fileupload";

const $primevue = usePrimeVue();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = defineModel("files", { required: true });
const brokenImage = ref(false);

const onSelectedFiles = (event: FileUploadSelectEvent) => {
  files.value = event.files;
};

const onTemplatedUpload = () => {
  console.log("Uploaded");
};

const formatSize = (bytes: number) => {
  const k = 1024;
  const dm = 3;
  const sizes = $primevue.config.locale?.fileSizeTypes;

  if (!sizes) {
    return "";
  }
  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize} ${sizes[i]}`;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const objectURL = (file: any) => {
  return file.objectURL;
};

const useFallbackImage = () => {
  brokenImage.value = true;
};
</script>
<style>
.card {
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.p-fileupload-buttonbar {
  padding: 1.125rem;

  color: #334155;
  border-bottom: 0 none;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  gap: 0.5rem;
}

.p-fileupload-content {
  padding: 0 1.125rem 1.125rem 1.125rem;

  border-top: none;
  color: #334155;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progressbar {
  height: 1rem !important;
  width: 15rem !important;
}

input[type="file"] {
  display: none;
}
</style>
