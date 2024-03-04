// Utilities
import { defineStore } from "pinia";

export const use$App = defineStore("$app", {
  state: () => ({
    isDirectorMode: false,
  }),
});
