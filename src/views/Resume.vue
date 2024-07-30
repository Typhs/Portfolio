<script lang="ts" setup>
import resumeData from "@/enums/ResumeData";
import { templateRef } from "@vueuse/core";

const resumeContainerEl = templateRef<HTMLElement>("resume-container");
// onMounted(()=>{
//   html2pdf().from(resumeContainerEl.value).save()

// })
</script>

<template>
  <div class="page-root">
    <div class="resume-container" ref="resume-container">
      <div class="resume-left-bg" />
      <div class="resume-content">
        <!-- ================== HEADER ================== -->
        <div class="resume-header">
          <h1 class="resume-title">{{ resumeData.name }}</h1>
          <h5 class="resume-subtitle">{{ resumeData.job_title }}</h5>
          <a :href="resumeData.portfolio.href" class="portfolio-link">
            {{ resumeData.portfolio.label }}
          </a>
        </div>
        <!-- ================== HEADER ================== -->

        <!-- ================== CONTENT ================== -->
        <div class="d-flex align-start w-100">
          <!-- ==== LEFT COLUMN ==== -->
          <div class="resume-column-a">
            <resume-section
              :section-data="section"
              :is-root="true"
              v-for="section in resumeData.column_left"
            />
          </div>
          <!-- ==== LEFT COLUMN ==== -->

          <!-- ==== RIGHT COLUMN ==== -->
          <div class="resume-column-b">
            <resume-section
              :section-data="section"
              :is-root="true"
              v-for="section in resumeData.column_right"
            />
          </div>
          <!-- ==== LEFT COLUMN ==== -->
        </div>
        <!-- ================== CONTENT ================== -->
      </div>
    </div>

    <br /><br /><br /><br /><br />

    <div align="center">
      original design:
      https://www.canva.com/p/templates/EAFloF7h9Kc-gray-modern-professional-without-photo-resume/
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/StyleSheets/ResumeStyles.scss";
$column-padding: 40px;
$header-padding: 40px;
$resume-width: 1000px;
$pdf-aspect-ratio: 210 / 297;

.page-root {
  height: 100%;
  background-color: $page-bg;
  padding: 80px;
}

.resume-container {
  position: relative;
  aspect-ratio: $pdf-aspect-ratio;
  width: $resume-width;
  margin: auto;
  padding-block: $header-padding;
  color: $cv-text-color;
  height: $resume-width / $pdf-aspect-ratio;

  background-color: $cv-bg1;

  .resume-left-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 100%;
    background-color: $cv-bg2;
    z-index: 0;
  }
  .resume-content {
    position: relative;
    z-index: 1;

    .resume-header {
      width: fit-content;
      max-width: 70%;
      border: $cv-border-thickness solid $cv-primary;
      padding: 20px 75px;
      margin: auto;
      margin-bottom: $header-padding;
      text-align: center;
      background-color: $cv-bg1;
      position: relative;

      .resume-title {
        font-size: 35px;
      }
      .resume-subtitle {
        font-size: 20px;
        font-weight: normal;
      }
      .portfolio-link {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        background-color: $cv-bg1;
        padding: 0 10px;
        color: $cv-text-color;
      }
    }

    .resume-column-a {
      width: 40%;
      padding-inline: $column-padding;
    }
    .resume-column-b {
      width: 60%;
      padding-inline: $column-padding;
    }
  }
}
</style>
