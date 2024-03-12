<script lang="ts" setup>
import { use$App } from "@/store/$app";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { use$github } from "@/store/$github";
import { on } from "events";

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
});

const fileName = computed(() => {
  return props.path.split("/").pop()!;
});

const $app = use$App();

const $github = use$github();

const loadedCode = ref<undefined | string>();

onMounted(() => {
  $github.fetchGitCode(props.path).then((res) => {
    typewriteCode(res);
  });
});

const intervalInstance = ref<undefined | ReturnType<typeof setInterval>>();
function typewriteCode(fullCode: string) {
  clearInterval(intervalInstance.value);
  const splitCode = fullCode.match(/.{1,10}/gs)!; // divide the code into an array of strings of 10 characters each

  // console.log(JSON.stringify(fullCode));
  let idx = 0;
  loadedCode.value = "";

  intervalInstance.value = setInterval(() => {
    if (idx < splitCode.length) {
      loadedCode.value = loadedCode.value + splitCode[idx];
      idx = idx + 1;
    } else {
      clearInterval(intervalInstance.value);
    }
  }, 20);

  setTimeout(() => {
    clearInterval(intervalInstance.value);
    loadedCode.value = fullCode;
    // after 4 seconds fully load the code - avoid keeping the user waiting
  }, 3000);
}

onUnmounted(() => {
  clearInterval(intervalInstance.value);
});
</script>

<template>
  <div>
    <div class="px-3">
      <h4 class="component-title">
        {{ fileName }}
        <v-btn
          variant="tonal"
          color="black"
          class="ml-2"
          icon
          size="22"
          density="comfortable"
          @click="$app.unselectCodePath()"
        >
          <v-icon icon="mdi-close" size="15" />
        </v-btn>
      </h4>

      <code-viewer
        language="vue"
        :code="loadedCode"
        class="component-code"
        v-if="loadedCode"
      />
      <div v-else class="code-loading-indicator">
        <div align="center" class="progress-container">
          <v-progress-circular indeterminate size="50" width="5" />
          <div class="font-weight-black mt-4">
            <v-icon icon="custom:git" size="35" />
            LOADING...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$container-color: mix($secondary, $black, 0.2);
$container-radius: 8px;

.component-title {
  position: relative;
  color: $black;
  background-color: $container-color;
  width: fit-content;
  padding: 2px 8px 0 8px;
  border-radius: $container-radius;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  font-family: monospace;
  font-weight: 600;
  font-size: 18px;
  z-index: 1;
}
.component-code,
.code-loading-indicator {
  border-radius: $container-radius;
  border-top-left-radius: 0;
  border: 2px solid $container-color;
  box-shadow: 0 0 15px transparentize($black, 0.6);
}

.code-loading-indicator {
  color: $secondary;
  height: 500px;
  background-color: transparentize($black, 0.5);
  .progress-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
