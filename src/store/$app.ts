// Utilities
import { defineStore } from "pinia";

export const use$App = defineStore("$app", {
  state: () => ({
    directorMode: {
      isOn: false,
      showCode: true,
      showComment: true,
      showPermanentToggle: false,
    },
  }),
});
