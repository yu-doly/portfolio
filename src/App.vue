<template>
  <app-global-header />
  <aside></aside>
  <main class="main">
    <section class="main-hero">
      <a class="main-hero__image" href="/">
        <img src="@/assets/img/logo.png" alt="logo" />
      </a>
    </section>
    <section class="main-content"></section>
  </main>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppGlobalHeader from './components/organisms/AppGlobalHeader.vue'

export default defineComponent({
  name: 'app',
  components: {
    AppGlobalHeader
  }
})
</script>

<style lang="scss" scoped>
.main {
  padding-top: 54px;

  .main-hero {
    position: relative;
    width: 100%;
    height: calc(100vh - 56px);
    background-color: $color-main;
    padding-bottom: 16px;
    min-height: calc(200px + 32px);

    &__image {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 200px;
      margin: auto;
    }
  }
  .main-content {
    height: 500px;
    width: 100%;
    background: $color-base;
  }
}
</style>
