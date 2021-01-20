<template>
  <app-main-section title="Work" url="/work">
    作品カードを表示する
  </app-main-section>
</template>

<script>
import { defineComponent } from 'vue'

import AppMainSection from '@/components/molecules/AppMainSection.vue'

export default defineComponent({
  name: 'app-main-work',
  components: { AppMainSection }
})
</script>

<style lang="scss" scoped>
.app-main-work {
}
</style>
