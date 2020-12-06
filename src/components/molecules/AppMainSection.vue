<template>
  <section :class="$options.name">
    <h2 v-if="title" :class="`${$options.name}__title`">{{ title }}</h2>
    <div :class="`${$options.name}__content`">
      <slot />
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-main-section',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main-section {
  max-width: $width-pc;
  margin: 0 auto;

  &:not(:first-child) {
    margin-top: 48px;
  }

  &__title {
    font-size: 2.4rem;
    font-weight: bold;
    text-align: center;
    color: $color-text-title;
    margin-bottom: 16px;
  }
  &__content {
  }
}
</style>
