// Utilities
import { defineStore } from "pinia";

export const use$github = defineStore("$github", {
  state: () => ({
    directorMode: {},
  }),
  actions: {
    fetchGitCode(path: string) {},
  },
});
