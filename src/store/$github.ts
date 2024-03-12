import { defineStore } from "pinia";
import axios from "axios";
import { resolve } from "path";

export const use$github = defineStore("$github", {
  state: () => ({
    cashedCodes: {} as { [key: string]: string },
  }),
  actions: {
    async fetchGitCode(path: string) {
      const headers = {
        Accept: "application/vnd.github.v3.raw",
      };

      // if the code is already cashed, return it
      if (this.cashedCodes[path]) {
        return new Promise((resolve) => resolve(this.cashedCodes[path]));
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
      // timeout to smooth out user experience and show off our sick loader
      // it's way too fast without it

      return axios
        .get(import.meta.env.VITE_GITHUB_API_PATH + path, { headers })
        .then((res) => {
          this.cashedCodes[path] = res.data;
          return res.data;
        });
    },
  },
});
