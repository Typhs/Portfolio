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
          background: "#09070f",
          "on-background": "#d1d1d1",
          primary: "#6857ff",
          "on-primary": "#ffffff",
          secondary: "#fb8c00",
          "on-secondary": "#ffffff",
          white: "#ffff",
          "on-white": "#000000",
          black: "#000000",
          "on-black": "#ffff",
          surface: "#110f1a",
          "on-surface": "#bfbfc4",
        },
        variables: {
          "border-color": "#4B465C",
          "medium-emphasis-opacity": 0.68,

          "shadow-key-umbra-opacity": "rgba(12, 16, 27, 0.15)",
          // "shadow-key-penumbra-opacity": "rgba(12, 16, 27, 0.01)",
          "shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.8)",
          "shadow-key-ambient-opacity": "rgba(12, 16, 27, 0.08)",
        },
      },
    },
  },
});
