<script lang="ts" setup>
import { templateRef } from "@vueuse/core";
import { onMounted } from "vue";
import hljs from "highlight.js";

// ======= LANGUAGES ======
import javascript from "highlight.js/lib/languages/javascript";
import { watch } from "vue";
hljs.registerLanguage("javascript", javascript);
// ======= LANGUAGES ======

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  language: {
    type: String,
    default: "plain-text",
  },
});

watch(
  props,
  () => {
    initCode();
  },
  { deep: true },
);

const codeEl = templateRef<HTMLPreElement>("code");

onMounted(() => {
  initCode();
});

function initCode() {
  codeEl.value;
  const html = hljs.highlight(props.code, { language: props.language }).value;
  codeEl.value.innerHTML = html;
}
</script>

<template>
  <pre ref="code" class="code-viewer-pre"></pre>
</template>

<style lang="scss" scoped>
.code-viewer-pre {
  text-align: left;
}
</style>
