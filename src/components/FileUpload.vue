<template>
  <FileUpload name="demo[]" url="/api/upload" :multiple="true" accept="image/*" :max-file-size="1000000" @upload="onTemplatedUpload($event)" @select="onSelectedFiles">
    <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
      <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
        <div class="flex gap-2">
          <Button icon="pi pi-images" rounded outlined @click="chooseCallback()"></Button>
          <Button icon="pi pi-cloud-upload" rounded outlined severity="success" :disabled="!files || files.length === 0" @click="uploadEvent(uploadCallback)"></Button>
          <Button icon="pi pi-times" rounded outlined severity="danger" :disabled="!files || files.length === 0" @click="clearCallback()"></Button>
        </div>
        <ProgressBar :value="totalSizePercent" :show-value="false" :class="['md:w-20rem h-1rem w-full md:ml-auto', { 'exceeded-progress-bar': totalSizePercent > 100 }]"
          ><span class="white-space-nowrap">{{ totalSize }}B / 1Mb</span></ProgressBar
        >
      </div>
    </template>
    <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
      <div v-if="files.length > 0">
        <h5>Pending</h5>
        <div class="flex flex-wrap p-0 sm:p-5 gap-5">
          <div
            v-for="(file, index) of files"
            :key="file.name + file.type + file.size"
            class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"
          >
            <div>
              <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
            </div>
            <span class="font-semibold">{{ file.name }}</span>
            <div>{{ formatSize(file.size) }}</div>
            <Badge value="Pending" severity="warning" />
            <Button icon="pi pi-times" outlined rounded severity="danger" @click="onRemoveTemplatingFile(file, removeFileCallback, index)" />
          </div>
        </div>
      </div>

      <div v-if="uploadedFiles.length > 0">
        <h5>Completed</h5>
        <div class="flex flex-wrap p-0 sm:p-5 gap-5">
          <div
            v-for="(file, index) of uploadedFiles"
            :key="file.name + file.type + file.size"
            class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"
          >
            <div>
              <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50" />
            </div>
            <span class="font-semibold">{{ file.name }}</span>
            <div>{{ formatSize(file.size) }}</div>
            <Badge value="Completed" class="mt-3" severity="success" />
            <Button icon="pi pi-times" outlined rounded severity="danger" @click="removeUploadedFileCallback(index)" />
          </div>
        </div>
      </div>
    </template>
    <template #empty>
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
        </label>
      </div>
    </template>
  </FileUpload>
</template>

<script lang="ts" setup>
import FileUpload, { FileUploadSelectEvent } from "primevue/fileupload";
import { ref } from "vue";
import { usePrimeVue } from "primevue/config";
import Button from "primevue/button";
import ProgressBar from "primevue/progressbar";
import Badge from "primevue/badge";

const primevue = usePrimeVue();
const totalSize = ref(0);
const totalSizePercent = ref(0);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const files = ref([] as any[]);

const onRemoveTemplatingFile = (file: File, removeFileCallback: (index: number) => void, index: number) => {
  removeFileCallback(index);
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
};

const onClearTemplatingUpload = (clear: () => void) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event: FileUploadSelectEvent) => {
  files.value = event.files;
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const uploadEvent = (callback: () => void) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const formatSize = (bytes: number) => {
  const k = 1024;
  const dm = 3;
  const sizes = primevue.config.locale?.fileSizeTypes;
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
</script>
<style></style>
