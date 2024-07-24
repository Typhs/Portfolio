<script lang="ts" setup>
import resumeData from "@/enums/ResumeData";

const CONTACT_INFO = [
  {
    icon: "mdi-email",
    label: "bmtailan@gmail.com",
  },
  {
    icon: "mdi-phone",
    label: "+55 42 99152-0362",
  },
  {
    icon: "mdi-web",
    label: "https://tailan.site",
  },
  {
    icon: "custom:git",
    label: "https://github.com/Typhs",
  },
] as const;
</script>

<template>
  <div class="page-root">
    <div class="resume-container">
      <div class="resume-left-bg" />
      <div class="resume-content">
        <!-- ================== HEADER ================== -->
        <div class="resume-header">
          <h1 class="resume-title">{{ resumeData.name }}</h1>
          <h5 class="resume-subtitle">{{ resumeData.job_title }}</h5>
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

.page-root {
  height: 100%;
  background-color: $page-bg;
  padding: 80px;
}

.resume-container {
  position: relative;
  aspect-ratio: 210 / 297;
  width: 1000px;
  margin: auto;
  padding-block: $header-padding;
  color: $cv-text-color;
  font-size: 15px;

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

      .resume-title {
        @include heading;
        font-size: 35px;
      }
      .resume-subtitle {
        font-size: 20px;
        font-weight: normal;
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
