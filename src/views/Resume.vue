<script lang="ts" setup></script>

<template>
  <div class="page-root">
    <div class="resume-container">
      <div class="resume-left-bg" />
      <div class="resume-content">
        <!-- ================== HEADER ================== -->
        <div class="resume-header">
          <div class="resume-title">Noah Tchumanji</div>
          <div class="resume-subtitle">Software developer</div>
        </div>
        <!-- ================== HEADER ================== -->

        <!-- ================== CONTENT ================== -->
        <div class="d-flex align-start w-100">
          <!-- ==== LEFT COLUMN ==== -->
          <div class="resume-column-a">
            <div class="section-title">Lorem Ipsum Cars</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            accusamus iste consequuntur rerum aut perspiciatis quo natus
            inventore quos dolorem!
          </div>
          <!-- ==== LEFT COLUMN ==== -->

          <!-- ==== RIGHT COLUMN ==== -->
          <div class="resume-column-b">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            consectetur commodi porro! Quisquam neque, accusamus perspiciatis
            minima facilis exercitationem sequi officia quo iusto?
            Necessitatibus voluptate quia amet unde, culpa facere recusandae
            magnam ipsa neque, rerum laudantium dolorem esse, odit minima.
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap");

$page-bg: #121216;

$cv-bg1: #ffffff;
$cv-text-color: #57585a;
$cv-bg2: #eff0f2;

$cv-primary: #57585a;
$cv-border-thickness: 3px;

.page-root {
  height: 100%;
  background-color: $page-bg;
  padding: 80px;
}

@mixin heading {
  font-style: normal;
  font-weight: 800;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
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

      .resume-title {
        @include heading;
        font-size: 40px;
      }
      .resume-subtitle {
        font-size: 20px;
      }
      background-color: $cv-bg1;
    }

    $column-padding: 40px;
    .resume-column-a {
      width: 40%;
      padding-inline: $column-padding;
    }
    .resume-column-b {
      width: 60%;
      padding-inline: $column-padding;
    }

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
  }
}
</style>
