// Utilities
import { defineStore } from "pinia";

export const use$App = defineStore("$app", {
  state: () => ({
    directorMode: {
      isOn: true,
      showCode: true,
      showComment: true,
      showPermanentToggle: false,
      currentCodePath: undefined as undefined | string,
    },
  }),
  actions: {
    selectCodePath(path: string) {
      this.directorMode.currentCodePath = path;
    },
    unselectCodePath() {
      this.directorMode.currentCodePath = undefined;
    },
  },
});
