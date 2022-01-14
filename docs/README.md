---
home: true
heroText: talking
tagline: 一些开发
actions:
  - text: 👉 Get Started
    link: /components/
    type: secondary
---

<br />


<script setup>
import { init } from 'ityped'
import { onMounted  } from 'vue'

onMounted(() => {
  const oneElement = document.querySelector('.description')
  init(oneElement, { showCursor: false,  disableBackTyping: true, strings: ['过程中的总结'] });
})
</script>

