// Utilities
import { defineStore } from "pinia";

export const use$App = defineStore("$app", {
  state: () => ({
    directorMode: {
      isOn: true,
      showCode: true,
      showComment: true,
    },
  }),
});
