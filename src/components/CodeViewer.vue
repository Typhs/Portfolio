<script lang="ts" setup>
import { onMounted, nextTick, PropType, computed, ref, watch } from "vue";

import "codemirror/lib/codemirror.css";

import CodeMirror from "codemirror";

import "codemirror/mode/javascript/javascript";

import "codemirror/theme/material.css";
import "codemirror/mode/vue/vue";

import { templateRef } from "@vueuse/core";
import { debounce as _debounce } from "lodash-es";
type EditorLanguage = "vue" | "text";

// TODO - add custom Linting and Highlighting for Engine Variable Syntax (aka: {{$,middleware_id.variable}})
// TODO - add a way to  fix the issue of when creating a CodeEditor while a v-expand is opening

const props = defineProps({
  language: {
    type: String as PropType<EditorLanguage>,
    default: "text",
  },
  code: {
    type: String,
    default: "",
  },
});
onMounted(async () => {
  await nextTick();
  // setTimeout(() => {
  mountEditor();
  // }, 300);
});

watch(
  () => props.code,
  () => {
    if (editorInstance.value) {
      const scrollInfo = editorInstance.value.getScrollInfo();
      editorInstance.value.setValue(props.code);
      nextTick(() => {
        editorInstance.value!.scrollTo(scrollInfo.left, scrollInfo.top);
      });
    }
  },
);

const editorEl = templateRef<HTMLTextAreaElement>("code-editor");
const editorInstance = ref<CodeMirror.Editor | null>(null);
function mountEditor() {
  editorInstance.value = CodeMirror.fromTextArea(editorEl.value, {
    lineNumbers: true,
    mode: props.language,
    theme: "material",
    fixedGutter: true,
    lineWrapping: true,
    readOnly: true,
    viewportMargin: Infinity,
  });
}
</script>

<template>
  <div class="custom-cm-editor-container">
    <textarea ref="code-editor">{{ props.code }}</textarea>
  </div>
</template>

<style lang="scss">
.custom-cm-editor-container {
  font-size: 13px;
  .CodeMirror {
    border-radius: inherit;
    height: 500px;
  }
}
</style>
