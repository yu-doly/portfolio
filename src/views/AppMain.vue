<template>
  <main :class="$options.name">
    <section :class="`${$options.name}__hero`">
      <a class="hero-image" href="/">
        <img src="@/assets/img/logo.png" alt="logo" />
      </a>
    </section>
    <div :class="`${$options.name}__content`">
      <app-main-profile />
      <app-main-skill />
      <app-main-work />
      <app-main-contact />
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue'

import AppMainProfile from '@/components/organisms/AppMainProfile.vue'
import AppMainSkill from '@/components/organisms/AppMainSkill.vue'
import AppMainWork from '@/components/organisms/AppMainWork.vue'
import AppMainContact from '@/components/organisms/AppMainContact.vue'

export default defineComponent({
  components: {
    AppMainProfile,
    AppMainSkill,
    AppMainWork,
    AppMainContact
  },
  name: 'app-main'
})
</script>

<style lang="scss" scoped>
.app-main {
  &__hero {
    position: relative;
    width: 100%;
    height: calc(100vh - 56px);
    background-color: $color-main;
    padding-bottom: 16px;
    min-height: calc(200px + 32px);

    .hero-image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 200px;
      margin: auto;
    }
  }
  &__content {
    padding: 56px 32px;
  }
}
</style>
