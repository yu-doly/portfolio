<template>
  <section :class="$options.name">
    <h2 v-if="title" :class="`${$options.name}__title`">
      <component :is="url ? 'a' : 'span'" :href="url">{{ title }}</component>
    </h2>
    <div v-if="text" :class="`${$options.name}__text`" v-text="text" />
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
    },
    url: {
      type: String,
      default: ''
    },
    text: {
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
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
    color: $color-text-title;
    margin-bottom: 32px;
  }
  &__text {
    font-size: 1.4rem;
    margin-bottom: 32px;
  }
  &__content {
  }
}
</style>
