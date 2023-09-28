import * as runtimeCore from "@vue/runtime-core";

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $refs: {
      [key: string]: HTMLElement | any;
    };
    // ... more stuff
  }
}
