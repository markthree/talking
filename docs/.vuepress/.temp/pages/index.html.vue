<template><br />
</template>

<script setup>
import { init } from 'ityped'
import { onMounted  } from 'vue'

onMounted(() => {
  const oneElement = document.querySelector('.description')
  init(oneElement, { showCursor: false,  disableBackTyping: true, strings: ['过程中的总结'] });
})
</script>
