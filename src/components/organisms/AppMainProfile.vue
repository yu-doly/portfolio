<template>
  <app-main-section :class="$options.name" title="About me" url="/about">
    <div :class="`${$options.name}__content content`">
      <img class="content__image" src="@/assets/img/logo.png" alt="chami" />
      <div class="content__text">
        プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
        プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
        プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
        プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
        プロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィールプロフィール
        sns情報
      </div>
    </div>
  </app-main-section>
</template>

<script>
import { defineComponent } from 'vue'

import AppMainSection from '@/components/molecules/AppMainSection.vue'

export default defineComponent({
  components: { AppMainSection },
  name: 'app-main-profile'
})
</script>

<style lang="scss" scoped>
.app-main-profile {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;

    &__image {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      margin-right: 24px;
    }
    &__text {
    }
  }
}
</style>
