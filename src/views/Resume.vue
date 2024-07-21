<script lang="ts" setup>
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
          <div class="resume-title">Tailan B. Morita</div>
          <div class="resume-subtitle">Front-end Engineer</div>
        </div>
        <!-- ================== HEADER ================== -->

        <!-- ================== CONTENT ================== -->
        <div class="d-flex align-start w-100">
          <!-- ==== LEFT COLUMN ==== -->
          <div class="resume-column-a">
            <resume-section section-title="Contact ">
              <div v-for="point in CONTACT_INFO" class="mb-4">
                <v-avatar class="icon-avatar mr-3" :icon="point.icon" size="25">
                  <v-icon :icon="point.icon" size="15" />
                </v-avatar>
                {{ point.label }}
              </div>
            </resume-section>

            <resume-section section-title="Skills ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              consequatur nostrum, excepturi itaque commodi impedit velit odit
              autem natus dicta?
            </resume-section>
            <resume-section section-title="Education ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              accusamus iste consequuntur rerum aut perspiciatis quo natus
              inventore quos dolorem!
            </resume-section>
            <resume-section section-title="Languages ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              accusamus iste consequuntur rerum aut perspiciatis quo natus
              inventore quos dolorem!
            </resume-section>
          </div>
          <!-- ==== LEFT COLUMN ==== -->

          <!-- ==== RIGHT COLUMN ==== -->
          <div class="resume-column-b">
            <resume-section section-title="Sumary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium consectetur commodi porro! Quisquam neque, accusamus
              perspiciatis minima facilis exercitationem sequi officia quo
              iusto? Necessitatibus voluptate quia amet unde, culpa facere
              recusandae magnam ipsa neque, rerum laudantium dolorem esse, odit
              minima.
            </resume-section>
            <resume-section section-title="Experience">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              accusamus iste consequuntur rerum aut perspiciatis quo natus
              inventore quos dolorem!
            </resume-section>
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
  padding-block: 60px;
  color: $cv-text-color;
  font-size: 16px;

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
      margin-bottom: 60px;
      text-align: center;
      background-color: $cv-bg1;

      .resume-title {
        @include heading;
        font-size: 40px;
      }
      .resume-subtitle {
        font-size: 20px;
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
    .icon-avatar {
      background-color: $cv-text-color;
      color: $cv-bg2;
    }
  }
}
</style>
