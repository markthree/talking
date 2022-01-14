import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/code/Talking/docs/.vuepress/theme/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/code/Talking/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
