import Vue from "@/assets/customIcons/VueLogo.vue";
import Git from "@/assets/customIcons/GitLogo.vue";
import Css from "@/assets/customIcons/CssLogo.vue";
import Typescript from "@/assets/customIcons/TypescriptLogo.vue";
import Javascript from "@/assets/customIcons/JavascriptLogo.vue";
import Vuetify from "@/assets/customIcons/VuetifyLogo.vue";
import Html from "@/assets/customIcons/HtmlLogo.vue";

/* ------------------- ADD ICON FILES HERE ------------------- */
const iconFiles = {
  Vue,
  Typescript,
  Git,
  Javascript,
  Vuetify,
  Html,
  Css,
} as any;
/* ------------------- ADD ICON FILES HERE ------------------- */

//converts camelCase strings to kebab-case
function convertToKebab(str: string): string {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase(),
  );
}
let rExport = {} as {
  [key: string]: any;
};
Object.keys(iconFiles).forEach((f: string) => {
  rExport[convertToKebab(f)] = iconFiles[f];
});

export default rExport; // ex: 'TestString' will be accessibe through v-icon as 'custom:test-'
