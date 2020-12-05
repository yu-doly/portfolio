<template>
  <button
    type="button"
    :class="[$options.name, { active: isActive }]"
    @click.prevent="onClick"
  >
    <span
      v-for="(_, index) in 3"
      :key="index"
      :class="`${$options.name}__item`"
    />
  </button>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'app-btn-menu',
  emits: ['click'],
  setup(_, { emit }) {
    const isActive = ref(false)

    const onClick = () => {
      isActive.value = !isActive.value
      emit('click', isActive.value)
    }

    return {
      isActive,
      onClick
    }
  }
})
</script>

<style lang="scss" scoped>
.app-btn-menu {
  position: relative;
  width: 30px;
  height: 24px;
  cursor: pointer;
  @include z-index(header-btn);

  &__item {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: $color-inverse;
    border-radius: 4px;
  }

  &,
  &__item {
    display: inline-block;
    transition: all 0.5s;
    box-sizing: border-box;
  }

  &__item:nth-of-type(1) {
    top: 0;
  }
  &__item:nth-of-type(2) {
    top: 10px;
  }
  &__item:nth-of-type(3) {
    bottom: 0;
  }

  // arrow
  // &.active &__item:nth-of-type(1),
  // &.active &__item:nth-of-type(3) {
  //   width: 16px;
  // }
  // &.active &__item:nth-of-type(1) {
  //   -webkit-transform: translate(-1px, 5px) rotate(-45deg);
  //   transform: translate(-1px, 5px) rotate(-45deg);
  // }
  // &.active &__item:nth-of-type(3) {
  //   -webkit-transform: translate(-1px, -5px) rotate(45deg);
  //   transform: translate(-1px, -5px) rotate(45deg);
  // }

  &__item:nth-of-type(1) {
    -webkit-animation: btn-menu-bar01 0.75s forwards;
    animation: btn-menu-bar01 0.75s forwards;
  }
  @-webkit-keyframes btn-menu-bar01 {
    0% {
      -webkit-transform: translateY(10px) rotate(45deg);
    }
    50% {
      -webkit-transform: translateY(10px) rotate(0);
    }
    100% {
      -webkit-transform: translateY(0) rotate(0);
    }
  }
  @keyframes btn-menu-bar01 {
    0% {
      transform: translateY(10px) rotate(45deg);
    }
    50% {
      transform: translateY(10px) rotate(0);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
  &__item:nth-of-type(2) {
    transition: all 0.25s 0.25s;
    opacity: 1;
  }
  &__item:nth-of-type(3) {
    -webkit-animation: btn-menu-bar03 0.75s forwards;
    animation: btn-menu-bar03 0.75s forwards;
  }
  @-webkit-keyframes btn-menu-bar03 {
    0% {
      -webkit-transform: translateY(-10px) rotate(-45deg);
    }
    50% {
      -webkit-transform: translateY(-10px) rotate(0);
    }
    100% {
      -webkit-transform: translateY(0) rotate(0);
    }
  }
  @keyframes btn-menu-bar03 {
    0% {
      transform: translateY(-10px) rotate(-45deg);
    }
    50% {
      transform: translateY(-10px) rotate(0);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
  &.active &__item:nth-of-type(1) {
    -webkit-animation: active-btn-menu-bar01 0.75s forwards;
    animation: active-btn-menu-bar01 0.75s forwards;
  }
  @-webkit-keyframes active-btn-menu-bar01 {
    0% {
      -webkit-transform: translateY(0) rotate(0);
    }
    50% {
      -webkit-transform: translateY(10px) rotate(0);
    }
    100% {
      -webkit-transform: translateY(10px) rotate(45deg);
    }
  }
  @keyframes active-btn-menu-bar01 {
    0% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(10px) rotate(0);
    }
    100% {
      transform: translateY(10px) rotate(45deg);
    }
  }
  &.active &__item:nth-of-type(2) {
    opacity: 0;
  }
  &.active &__item:nth-of-type(3) {
    -webkit-animation: active-btn-menu-bar03 0.75s forwards;
    animation: active-btn-menu-bar03 0.75s forwards;
  }
  @-webkit-keyframes active-btn-menu-bar03 {
    0% {
      -webkit-transform: translateY(0) rotate(0);
    }
    50% {
      -webkit-transform: translateY(-10px) rotate(0);
    }
    100% {
      -webkit-transform: translateY(-10px) rotate(-45deg);
    }
  }
  @keyframes active-btn-menu-bar03 {
    0% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-10px) rotate(0);
    }
    100% {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
}
</style>
