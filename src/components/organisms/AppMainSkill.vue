<template>
  <app-main-section
    :class="$options.name"
    title="Skill"
    url="/about#skill"
    :text="text"
  >
    <div
      v-for="(skillGroup, index) in skillsGroups"
      :key="index"
      :class="`${$options.name}__group`"
    >
      <h3 class="group__title">{{ skillGroup.title }}</h3>
      <div class="group__content">
        <app-skill-card
          class="skill"
          v-for="(skill, index) in skillGroup.skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </div>
  </app-main-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppMainSection from '@/components/molecules/AppMainSection.vue'
import AppSkillCard from '../molecules/AppSkillCard.vue'

export default defineComponent({
  name: 'app-main-skill',
  components: { AppMainSection, AppSkillCard },
  setup() {
    const text = `説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明`
    const getSkill = (
      label: string,
      icon: string,
      yoe: number,
      be: number,
      level: number
    ) => {
      return {
        label: label,
        icon: icon,
        yearsOfExperience: yoe,
        businessExperience: be,
        level: level
      }
    }
    const skillsGroups = [
      {
        title: 'frontend',
        skills: [
          getSkill('vue', 'vue', 3, 1, 3),
          getSkill('jquery', 'jquery', 3, 1, 3)
        ]
      },
      {
        title: 'backend',
        skills: [getSkill('php', 'php', 3, 1, 1), getSkill('go', 'go', 3, 1, 2)]
      }
      // dev tools
    ]

    return {
      text,
      skillsGroups
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main-skill {
  &__group {
    &:not(:first-child) {
      margin-top: 32px;
    }
  }
  .group {
    &__title {
      font-size: 2.4rem;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }
  .skill {
    &:not(:first-child) {
      margin-top: 16px;
    }
  }
}
</style>
