<script lang="ts" setup>
import TheParallaxHeader from "@/views/Home/TheParallaxHeader.vue";
import ThePageEndToolset from "@/views/Home/ThePageEndToolset.vue";
import TheProjectInsights from "@/views/Home/TheProjectInsights.vue";
import { use$App } from "@/store/$app";

const $app = use$App();
</script>

<template>
  <div ref="test">
    <the-parallax-header>
      <div align="center" class="py-15">
        <spacer height="100px" />

        <div class="hero-intro">
          <div class="profile-avatar">
            <div class="avatar-ring">
              <div class="avatar-image"></div>
            </div>
          </div>

          <div class="intro-content">
            <h1 class="text-white mb-2">I'm Tailan</h1>
            <p class="mb-4">and I'm a clever Front-End Developer</p>

            <div class="intro-buttons">
              <v-btn
                variant="tonal"
                prepend-icon="mdi-linkedin"
                href="https://www.linkedin.com/in/tailan/"
                color="primary-accent"
                >LinkedIn</v-btn
              >
              <v-btn
                :to="{ name: 'about-me' }"
                variant="flat"
                prepend-icon="mdi-account-details"
                color="secondary"
              >
                Resume</v-btn
              >
            </div>
          </div>
        </div>
        <icon-divider width="400px" color="secondary" class="my-5" />

        <div>
          <p class="mb-3">Welcome to my personal portfolio.</p>
          <v-btn
            href="https://github.com/Typhs/portfolio-v2"
            target="_blank"
            color="secondary"
            variant="tonal"
          >
            <v-icon icon="custom:git" class="mr-2" />
            Source code
          </v-btn>
        </div>

        <spacer height="250px" />

        <div>
          <about-me-tabs />
        </div>

        <spacer height="200px" />

        <the-page-end-toolset />

        <spacer height="200px" />

        <contact-info />

        <spacer height="200px" />

        <v-card max-width="550px" variant="text">
          <div class="text-h5">Thank you for coming by</div>
          <br />
          <div class="mb-5">
            Hopefully I was able to show off some of the cool stuff I can pull
          </div>

          The quickest way to get to me is through the email: <br />
          <span class="text-primary-accent font-weight-bold">
            bmtailan@gmail.com
          </span>
        </v-card>
      </div>

      <spacer height="150px" />

      <the-project-insights />

      <spacer height="200px" />

      <div>
        <bubbling-icons-animation height="500px" size="25" multiplier="6" />
      </div>

      <the-mouse-filter v-if="false" />
      <!-- REVIEW mouse filter effect -->
    </the-parallax-header>
  </div>
</template>

<style lang="scss" scoped>
.hero-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 700px;
  margin: 0 auto;
}

.profile-avatar {
  flex-shrink: 0;
}

.avatar-ring {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgb(var(--v-theme-primary)) 0%,
    rgb(var(--v-theme-secondary)) 100%
  );
  box-shadow:
    0 0 60px rgba(var(--v-theme-primary-rgb), 0.4),
    0 0 120px rgba(var(--v-theme-secondary-rgb), 0.2);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse-ring 3s ease-in-out infinite;
}

@keyframes pulse-ring {
  0%,
  100% {
    transform: scale(1);
    box-shadow:
      0 0 60px rgba(var(--v-theme-primary-rgb), 0.4),
      0 0 120px rgba(var(--v-theme-secondary-rgb), 0.2);
  }
  50% {
    transform: scale(1.02);
    box-shadow:
      0 0 80px rgba(var(--v-theme-primary-rgb), 0.5),
      0 0 140px rgba(var(--v-theme-secondary-rgb), 0.3);
  }
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: url("/profile-picture.jpg");
  background-position: center;
  background-size: cover;
  border: 3px solid rgb(var(--v-theme-surface));
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.2);
}

.intro-content {
  text-align: center;
}

.intro-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .avatar-ring {
    width: 140px;
    height: 140px;
  }

  .intro-buttons {
    flex-direction: column;
    width: 100%;

    .v-btn {
      width: 100%;
    }
  }
}
</style>
