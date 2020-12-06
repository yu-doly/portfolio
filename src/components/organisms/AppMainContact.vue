<template>
  <app-main-section title="Contact">
    簡単な問い合わせフォームを作成する
  </app-main-section>
</template>

<script>
import { defineComponent } from 'vue'

import AppMainSection from '@/components/molecules/AppMainSection.vue'

export default defineComponent({
  name: 'app-main-contact',
  components: { AppMainSection }
})
</script>

<style lang="scss" scoped>
.app-main-contact {
}
</style>
