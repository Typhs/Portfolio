<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  sectionData: {
    type: Object as PropType<ResumeSection>,
    default: {},
  },
  isRoot: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="mb-10">
    <div class="section-title" v-if="props.sectionData.title">
      {{ props.sectionData.title }}
    </div>

    <div>
      <div v-for="item in props.sectionData.items" class="mb-4">
        <h3 v-if="item.title" class="font-weight-bold mb-2">
          {{ item.title }}
        </h3>
        <div v-if="item.subtitle" class="mb-2 font-weight-medium">
          {{ item.subtitle }}
        </div>

        <div v-if="typeof item.content == 'string'">
          <div class="whitespace-pre">
            <v-avatar class="icon-avatar mr-2" icon size="25" v-if="item.icon">
              <v-icon :icon="item.icon" size="15" />
            </v-avatar>
            <v-icon
              v-else-if="props.sectionData.type == 'bullet-list'"
              icon="mdi-circle"
              size="6"
              class="mr-2"
            />
            {{ item.content }}
          </div>
          <div>
            <v-progress-linear
              v-if="item.percentage != null"
              :model-value="item.percentage"
              height="8"
              rounded
            >
            </v-progress-linear>
          </div>
        </div>

        <div v-else class="pl-4">
          <resume-section :section-data="item.content" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/StyleSheets/ResumeStyles.scss";

.section-title {
  @include heading;
  font-size: 24px;
  position: relative;
  margin-bottom: 20px;
  padding-bottom: 4px;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: $cv-border-thickness;
    background-color: $cv-primary;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: calc($cv-border-thickness / 2);
    height: 10px;
    border-radius: 2px;
    aspect-ratio: 1 /1;
    background-color: $cv-primary;
    transform: translateY(50%);
  }
}

.icon-avatar {
  background-color: $cv-text-color;
  color: $cv-bg2;
}
</style>
