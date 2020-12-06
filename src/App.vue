<template>
  <app-global-header />
  <aside></aside>
  <router-view class="page-content" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppGlobalHeader from '@/components/organisms/AppGlobalHeader.vue'

export default defineComponent({
  name: 'app',
  components: {
    AppGlobalHeader
  }
})
</script>

<style lang="scss" scoped>
.page-content {
  padding-top: 54px;
}
</style>
