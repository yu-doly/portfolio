<template>
  <nav :class="[$options.name, { open: isOpen }]">
    <ul class="nav-menu">
      <li v-for="(page, index) in pages" :key="index" class="nav-menu__item">
        <router-link class="page-link" :to="page.url">
          <app-icon class="page-link__icon" :icon="page.icon" />{{ page.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-nav',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const pages = [
      { label: 'About', url: '/about', icon: 'user' },
      { label: 'Work', url: '/work', icon: 'user' },
      { label: 'Contact', url: '/contact', icon: 'user' }
    ]

    return {
      pages
    }
  }
})
</script>

<style lang="scss" scoped>
.app-nav {
  display: inline-block;

  .nav-menu {
    &__item {
      display: inline-block;

      .page-link {
        font-size: 1.4rem;
        padding: 1em;

        &:hover {
          @include hover($color-base);
        }

        &__icon {
          margin-right: 8px;
        }
      }
    }
  }
}

@include media-down(lg) {
  .app-nav {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    width: 100%;
    background: $color-main;
    padding: calc(40px + 16px) 24px 40px;
    overflow-y: auto;
    overflow-x: hidden;
    transition: 0.5s;

    &.open {
      left: 0;
    }

    .nav-menu {
      max-width: $width-sp;
      margin: 0 auto;

      &__item {
        display: block;
        border-bottom: 1px dashed $color-border;

        .page-link {
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
}
</style>
