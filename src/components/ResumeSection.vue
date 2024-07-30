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
  classMargin: {
    type: String,
    default: "mb-10",
  },
});

function isValidUrl(text: string) {
  let url;

  try {
    url = new URL(text);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function sectionHighlightSplit(text: string) {
  return text.split("**");
}
</script>

<template>
  <div :class="props.classMargin">
    <h2 class="section-title" v-if="props.sectionData.title">
      {{ props.sectionData.title }}
    </h2>

    <div>
      <div
        v-for="item in props.sectionData.items"
        class="mb-2"
        :class="{ 'mb-10': item.title && props.sectionData.items.length > 1 }"
      >
        <h3 v-if="item.title" class="font-weight-bold mb-1 content-item-title">
          {{ item.title }}
        </h3>
        <h3
          v-if="item.subtitle"
          class="mb-1 font-weight-medium text-transform-none"
        >
          {{ item.subtitle }}
        </h3>

        <div v-if="typeof item.content == 'string'">
          <div class="whitespace-pre position-relative">
            <v-avatar class="icon-avatar mr-2" icon size="25" v-if="item.icon">
              <v-icon :icon="item.icon" size="15" />
            </v-avatar>
            <v-icon
              v-else-if="props.sectionData.type == 'bullet-list'"
              icon="mdi-circle"
              size="6"
              class="mr-2"
            />

            <!-- ====== CONTENT ====== -->
            <a
              :href="item.content"
              v-if="isValidUrl(item.content)"
              class="text-color-unset"
            >
              {{ item.content }}
            </a>
            <span v-else>
              <template
                v-for="(txt, tIdx) in sectionHighlightSplit(item.content)"
              >
                <span :class="{ 'cv-content-highlight': tIdx % 2 != 0 }">
                  {{ txt }}
                </span>
              </template>
            </span>
            <!-- ====== CONTENT ====== -->

            <span
              v-if="item.percentage != null"
              class="text-small position-absolute right-0 pt-1"
            >
              {{ item.percentage }}%
            </span>
          </div>

          <div>
            <v-progress-linear
              class="mb-3"
              v-if="item.percentage != null"
              :model-value="item.percentage"
              height="8"
              rounded
            >
            </v-progress-linear>
          </div>
        </div>

        <div v-else :class="{ 'pl-5': !props.isRoot }">
          <resume-section :section-data="item.content" class-margin="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/StyleSheets/ResumeStyles.scss";

.section-title {
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
.content-item-title {
  font-size: 16.5px;
}
.icon-avatar {
  background-color: $cv-text-color;
  color: $cv-bg2;
}
.text-color-unset {
  color: $cv-text-color;
}
</style>
