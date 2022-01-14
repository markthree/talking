export const themeData = {
  "logo": "logo.png",
  "logoDark": "logo-darked.png",
  "lastUpdatedText": "更新时间",
  "toggleDarkMode": "一天又过去了吗?",
  "navbar": [
    {
      "text": "组件库",
      "link": "/components/"
    },
    {
      "text": "GitHub",
      "link": "https://github.com/dishait/talking"
    },
    {
      "text": "Gitee",
      "link": "https://gitee.com/dishait/talking"
    }
  ],
  "sidebarDepth": 10,
  "sidebar": {
    "/components/": [
      {
        "text": "Components",
        "children": [
          "/components/index.md"
        ]
      },
      {
        "text": "Core",
        "children": [
          "/components/core/shouldCore.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
