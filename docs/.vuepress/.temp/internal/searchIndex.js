export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "介绍",
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
    "path": "/components/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "为什么组件库要有核心",
    "headers": [
      {
        "level": 2,
        "title": "动机 🐇",
        "slug": "动机",
        "children": []
      },
      {
        "level": 2,
        "title": "起因 🦌",
        "slug": "起因",
        "children": [
          {
            "level": 3,
            "title": "props",
            "slug": "props",
            "children": []
          },
          {
            "level": 3,
            "title": "computed",
            "slug": "computed",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "总结 🐿️",
        "slug": "总结",
        "children": []
      },
      {
        "level": 2,
        "title": "启发 🐳",
        "slug": "启发",
        "children": []
      }
    ],
    "path": "/components/core/shouldCore.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
