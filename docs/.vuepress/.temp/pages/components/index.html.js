export const data = {
  "key": "v-1020f180",
  "path": "/components/",
  "title": "介绍",
  "lang": "zh-CN",
  "frontmatter": {
    "next": "core/shouldCore"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "方向 🤔",
      "slug": "方向",
      "children": []
    },
    {
      "level": 2,
      "title": "构成 🧐",
      "slug": "构成",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "components/index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
