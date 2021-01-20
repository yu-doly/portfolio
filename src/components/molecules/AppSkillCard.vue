<template>
  <div :class="$options.name">
    <div :class="`${$options.name}__label`">
      {{ skill.label }}
      <component class="skill-icon" :is="skillIcon" />
    </div>
    <div :class="`${$options.name}__years-of-experience`">
      {{ getExperienceText(skill.yearsOfExperience) }}
    </div>
    <div :class="`${$options.name}__business-experience`">
      {{ getExperienceText(skill.businessExperience) }}
    </div>
    <div :class="`${$options.name}__level`">{{ skill.level }}</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

interface Skill {
  label: string
  icon: string
  yearsOfExperience: number
  businessExperience: number
  level: number
}

export default defineComponent({
  name: 'app-skill-card',
  props: {
    skill: {
      type: Object as PropType<Skill>,
      default: () => {
        return {}
      }
    }
  },
  setup(prop) {
    const skillIcon = computed(
      () => require(`@/assets/img/skill/${prop.skill.icon}.svg`).default
    )
    const getExperienceText = (year: number) => {
      // 今からの年数を計算する
      return `${year}年`
    }

    return {
      skillIcon,
      getExperienceText
    }
  }
})
</script>

<style lang="scss" scoped>
.app-skill-card {
  font-size: 1.6rem;

  &__label {
    .skill-icon {
      vertical-align: middle;
      display: inline-block;
      width: auto;
      height: 16px;
    }
  }
}
</style>
