<template>
  <app-main-section title="Skill">
    frontend, backend devops tools: - 言語（画像） - 経験年数 - スキルレート
  </app-main-section>
</template>

<script>
import { defineComponent } from 'vue'

import AppMainSection from '@/components/molecules/AppMainSection.vue'

export default defineComponent({
  name: 'app-main-skill',
  components: { AppMainSection }
})
</script>

<style lang="scss" scoped>
.app-main-skill {
}
</style>
