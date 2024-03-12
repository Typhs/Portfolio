import { defineStore } from "pinia";
import axios from "axios";

export const use$github = defineStore("$github", {
  state: () => ({
    directorMode: {},
  }),
  actions: {
    async fetchGitCode(path: string) {
      const headers = {
        Accept: "application/vnd.github.v3.raw",
      };

      await new Promise((resolve) => setTimeout(resolve, 1000));
      // timeout to smooth out user experience
      // it's way too fast without the timeout

      return axios
        .get(import.meta.env.VITE_GITHUB_API_PATH + path, { headers })
        .then((res) => {
          return res.data;
        });
    },
  },
});
