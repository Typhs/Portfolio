/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          background: "#07050c",
          "on-background": "#d1d1d1",
          primary: "#6857ff",
          "on-primary": "#ffffff",
          secondary: "#eb6840",
          "on-secondary": "#ffffff",
          white: "#ffff",
          "on-white": "#000000",
          black: "#000000",
          "on-black": "#ffff",
        },
      },
    },
  },
});
