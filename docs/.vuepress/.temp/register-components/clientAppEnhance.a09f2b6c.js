import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("t-btn", defineAsyncComponent(() => import("D:/code/Talking/components/t-btn.vue"))),
  app.component("t-color", defineAsyncComponent(() => import("D:/code/Talking/components/t-color.vue"))),
  app.component("t-doc-align", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-align.vue"))),
  app.component("t-doc-boo", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-boo.vue"))),
  app.component("t-doc-color", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-color.vue"))),
  app.component("t-doc-direction", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-direction.vue"))),
  app.component("t-doc-icon", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-icon.vue"))),
  app.component("t-doc-justify", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-justify.vue"))),
  app.component("t-doc-rounded", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-rounded.vue"))),
  app.component("t-doc-shadow", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-shadow.vue"))),
  app.component("t-doc-size", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-size.vue"))),
  app.component("t-doc-z-index", defineAsyncComponent(() => import("D:/code/Talking/components/t-doc-z-index.vue"))),
  app.component("t-facade", defineAsyncComponent(() => import("D:/code/Talking/components/t-facade.vue"))),
  app.component("t-icon", defineAsyncComponent(() => import("D:/code/Talking/components/t-icon.vue"))),
  app.component("t-tag", defineAsyncComponent(() => import("D:/code/Talking/components/t-tag.vue"))),
  app.component("t-toast", defineAsyncComponent(() => import("D:/code/Talking/components/t-toast.vue")))
}
