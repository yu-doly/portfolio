<template>
  <header :class="$options.name">
    <app-btn-menu class="btn-menu" @click="onClickToggleMenu" />
    <app-nav :is-open="showMenu" />
    <router-link class="home" to="/">
      <img src="@/assets/img/logo.png" alt="Home" />
    </router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import AppBtnMenu from '@/components/atoms/AppBtnMenu.vue'
import AppNav from '@/components/organisms/AppNav.vue'

export default defineComponent({
  name: 'app-global-header',
  components: { AppBtnMenu, AppNav },
  setup() {
    const showMenu = ref(false)

    const onClickToggleMenu = (show: boolean) => {
      showMenu.value = show
    }

    return {
      showMenu,
      onClickToggleMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.app-global-header {
  position: relative;

  @include z-index(header);
  width: 100%;
  background-color: $color-main;
  color: $color-inverse;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.4s ease 0s;

  @include media-up(lg) {
    .btn-menu {
      display: none;
    }
  }

  .home {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 48px;
    height: 48px;
  }
}
</style>
