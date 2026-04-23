<script lang="ts" setup>
const profile = {
  core: {
    name: "Tailan Barros Morita",
    email: "bmtailan@gmail.com",
    phone: "+55 (42) 99152-0362",
    github: "www.github.com/Typhs",
    website: "www.tailan.pro",
    linkedIn: "www.linkedin.com/in/tailan",
    location: "PR - Brazil",
  },
  summary:
    "I have extensive professional experience developing, deploying and debugging user interfaces, working closely with backend developers and designers to ensure seamless integration. I strive to be pleasant to work with and am quickly learn any new technologies.",
  skills: [
    { name: "Javascript", level: "EXPERT" },
    { name: "Typescript", level: "EXPERT" },
    { name: "Vue.js", level: "EXPERT" },
    { name: "React", level: "EXPERT" },
    { name: "CSS", level: "EXPERT" },
    { name: "Node.js", level: "ADVANCED" },
    { name: "Nuxt", level: "ADVANCED" },
    { name: "Next", level: "ADVANCED" },
    { name: "Git", level: "ADVANCED" },
    { name: "Cypress", level: "ADVANCED" },
    { name: "Tailwind", level: "INTERMEDIATE" },
    { name: "React Native", level: "INTERMEDIATE" },
  ],
  education: [
    {
      degree: "Technologist Degree in Systems Analysis and Development",
      period: "2021 — Present",
      status: "IN_PROGRESS",
      institution: "UTFPR - Ponta Grossa (PR), Brazil",
    },
  ],
  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
  experience: [
    {
      title: "Mid-level Developer",
      period: "Jan 2025 — Present",
      company: "Kognit",
      color: "#F59E0B",
      description:
        "Led new frontend features on a SaaS insurance creation system. Organized the development team for delivering highly complex functionalities. Built system guidelines and standards to help the team maintain high productivity with cutting-edge tools.",
      technologies: [
        "React",
        "React Native",
        "TypeScript",
        "Redux",
        "Redux Saga",
        "Styled Components",
        "Material UI",
        "C#",
        ".Net",
        "Cypress",
        "TDD",
      ],
    },
    {
      title: "Lead Front-End Developer",
      period: "Aug 2023 — Jan 2025",
      company: "FiqOn",
      color: "#34D399",
      description:
        "Led the architectural redesign of a SaaS Integration Platform, strategically selecting tech stack to optimize performance, scalability, and developer experience. Defined guidelines, technical documentation, and a robust architecture. Set up automated unit testing with Vitest and Cypress. Coordinated front-end development encompassing over 150 files.",
      technologies: [
        "Vue",
        "TypeScript",
        "Bootstrap",
        "CSS",
        "Vitest",
        "Cypress",
      ],
    },
    {
      title: "Mid Front-End Developer",
      period: "Oct 2022 — Aug 2023",
      company: "FiqOn",
      color: "#60A5FA",
      description:
        "Worked alongside the UX team to enhance the interface through smoothing transitions and animations — resulting in 40% increased user satisfaction. Developed and configured the core UI library used within the project. Developed crucial features on top of a running system with hundreds of active users.",
      technologies: ["Vue", "JavaScript", "Bootstrap", "CSS"],
    },
    {
      title: "Junior Front-End Developer",
      period: "May 2022 — Oct 2022",
      company: "FiqOn",
      color: "#A78BFA",
      description:
        "Design and implementation of dozens of features into an existing Vue codebase while maintaining patterns and guidelines. Diagnosing and fixing hundreds of pre-existing bugs on the interface.",
      technologies: ["Vue", "JavaScript", "CSS"],
    },
  ],
};

const skillLevelMap: Record<string, number> = {
  EXPERT: 100,
  ADVANCED: 75,
  INTERMEDIATE: 50,
  BEGINNER: 25,
};

const skillColor = (level: string) => {
  return (
    {
      EXPERT: "amber",
      ADVANCED: "teal",
      INTERMEDIATE: "blue",
      BEGINNER: "grey",
    }[level] ?? "grey"
  );
};
</script>

<template>
  <div class="resume-root">
    <!-- ─── HERO ─────────────────────────────────────────── -->
    <div class="hero-section">
      <div class="hero-bg-accent" />
      <v-container class="hero-inner">
        <div class="mb-5">
          <VBtn :to="{ name: 'home' }" icon color="primary" variant="tonal">
            <VIcon icon="mdi-arrow-left" />
          </VBtn>
        </div>
        <v-row align="center" justify="space-between">
          <v-col cols="12" md="7">
            <p class="hero-eyebrow">Frontend Engineer</p>
            <h1 class="hero-name">{{ profile.core.name }}</h1>
            <p class="hero-summary">{{ profile.summary }}</p>

            <div class="contact-chips">
              <a :href="'mailto:' + profile.core.email" class="chip-link">
                <v-chip
                  class="contact-chip"
                  prepend-icon="mdi-email-outline"
                  variant="outlined"
                >
                  {{ profile.core.email }}
                </v-chip>
              </a>
              <a :href="'tel:' + profile.core.phone" class="chip-link">
                <v-chip
                  class="contact-chip"
                  prepend-icon="mdi-phone-outline"
                  variant="outlined"
                >
                  {{ profile.core.phone }}
                </v-chip>
              </a>
              <a
                :href="'https://' + profile.core.github"
                target="_blank"
                class="chip-link"
              >
                <v-chip
                  class="contact-chip"
                  prepend-icon="mdi-github"
                  variant="outlined"
                >
                  GitHub
                </v-chip>
              </a>
              <a
                :href="'https://' + profile.core.linkedIn"
                target="_blank"
                class="chip-link"
              >
                <v-chip
                  class="contact-chip"
                  prepend-icon="mdi-linkedin"
                  variant="outlined"
                >
                  LinkedIn
                </v-chip>
              </a>
              <a
                :href="'https://' + profile.core.website"
                target="_blank"
                class="chip-link"
              >
                <v-chip
                  class="contact-chip"
                  prepend-icon="mdi-web"
                  variant="outlined"
                >
                  {{ profile.core.website }}
                </v-chip>
              </a>
              <v-chip
                class="contact-chip"
                prepend-icon="mdi-map-marker-outline"
                variant="outlined"
              >
                {{ profile.core.location }}
              </v-chip>
            </div>
          </v-col>

          <v-col cols="12" md="4" class="d-flex justify-center justify-md-end">
            <div class="avatar-ring">
              <div class="avatar-inner">
                <span class="avatar-initials">TM</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="content-area">
      <v-row>
        <!-- ─── LEFT COLUMN ──────────────────────────────── -->
        <v-col cols="12" md="4" class="left-col">
          <!-- SKILLS -->
          <div class="section-block">
            <div class="section-header">
              <v-icon class="section-icon" icon="mdi-code-braces" />
              <span class="section-title">Skills</span>
            </div>

            <div class="skills-list">
              <div
                v-for="skill in profile.skills"
                :key="skill.name"
                class="skill-row"
              >
                <div class="skill-top">
                  <span class="skill-name">{{ skill.name }}</span>
                  <v-chip
                    :color="skillColor(skill.level)"
                    size="x-small"
                    variant="tonal"
                    class="skill-badge"
                    >{{ skill.level }}</v-chip
                  >
                </div>
                <v-progress-linear
                  :model-value="skillLevelMap[skill.level]"
                  :color="skillColor(skill.level)"
                  rounded
                  height="4"
                  bg-color="rgba(255,255,255,0.06)"
                  class="skill-bar"
                />
              </div>
            </div>
          </div>

          <v-divider class="section-divider" />

          <!-- LANGUAGES -->
          <div class="section-block">
            <div class="section-header">
              <v-icon class="section-icon" icon="mdi-translate" />
              <span class="section-title">Languages</span>
            </div>
            <div class="lang-list">
              <div
                v-for="lang in profile.languages"
                :key="lang.name"
                class="lang-row"
              >
                <v-icon icon="mdi-circle-small" class="lang-dot" />
                <span class="lang-name">{{ lang.name }}</span>
                <span class="lang-level">{{ lang.level }}</span>
              </div>
            </div>
          </div>

          <v-divider class="section-divider" />

          <!-- EDUCATION -->
          <div class="section-block">
            <div class="section-header">
              <v-icon class="section-icon" icon="mdi-school-outline" />
              <span class="section-title">Education</span>
            </div>
            <div
              v-for="edu in profile.education"
              :key="edu.institution"
              class="edu-block"
            >
              <p class="edu-degree">{{ edu.degree }}</p>
              <p class="edu-institution">{{ edu.institution }}</p>
              <div class="edu-footer">
                <span class="edu-period">{{ edu.period }}</span>
                <v-chip size="x-small" color="amber" variant="tonal">
                  In Progress
                </v-chip>
              </div>
            </div>
          </div>
        </v-col>

        <!-- ─── RIGHT COLUMN ─────────────────────────────── -->
        <v-col cols="12" md="8" class="right-col">
          <div class="section-header mb-6">
            <v-icon class="section-icon" icon="mdi-briefcase-outline" />
            <span class="section-title">Experience</span>
          </div>

          <div class="timeline">
            <div
              v-for="(job, idx) in profile.experience"
              :key="idx"
              class="timeline-item"
            >
              <!-- connector -->
              <div class="timeline-connector">
                <div class="tl-dot" :style="{ background: job.color }" />
                <div
                  v-if="idx < profile.experience.length - 1"
                  class="tl-line"
                />
              </div>

              <!-- card -->
              <div class="tl-card">
                <div class="tl-card-header">
                  <div>
                    <h3 class="job-title">{{ job.title }}</h3>
                    <div class="job-meta">
                      <span class="job-company" :style="{ color: job.color }">
                        {{ job.company }}
                      </span>
                      <span class="job-sep">·</span>
                      <span class="job-period">{{ job.period }}</span>
                    </div>
                  </div>
                </div>

                <p class="job-description">{{ job.description }}</p>

                <div class="tech-chips">
                  <v-chip
                    v-for="tech in job.technologies"
                    :key="tech"
                    size="x-small"
                    variant="tonal"
                    :color="job.color"
                    class="tech-chip"
                    >{{ tech }}</v-chip
                  >
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
// ─── TOKENS ────────────────────────────────────────────────
$bg: #0d0f14;
$surface: #14171f;
$surface2: #1c2030;
$border: rgba(255, 255, 255, 0.07);
$text: #e8eaf0;
$muted: #6b7280;
$accent: #f59e0b;

// ─── ROOT ──────────────────────────────────────────────────
.resume-root {
  background: $bg;
  min-height: 100vh;
  color: $text;
  font-family: "DM Sans", "Segoe UI", sans-serif;
}

// ─── HERO ──────────────────────────────────────────────────
.hero-section {
  position: relative;
  background: $surface;
  border-bottom: 1px solid $border;
  padding: 56px 0 48px;
  overflow: hidden;
}

.hero-bg-accent {
  position: absolute;
  top: -120px;
  right: -120px;
  width: 480px;
  height: 480px;
  background: radial-gradient(
    circle,
    rgba(245, 158, 11, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $accent;
  margin-bottom: 10px;
}

.hero-name {
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: #fff;
  margin-bottom: 20px;
}

.hero-summary {
  font-size: 0.95rem;
  line-height: 1.75;
  color: $muted;
  max-width: 540px;
  margin-bottom: 28px;
}

.contact-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip-link {
  text-decoration: none;
}

.contact-chip {
  font-size: 0.72rem !important;
  color: $muted !important;
  border-color: $border !important;
  transition:
    border-color 0.2s,
    color 0.2s;

  &:hover {
    border-color: $accent !important;
    color: $accent !important;
  }
}

// ─── AVATAR ────────────────────────────────────────────────
.avatar-ring {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, $accent, #34d399, #60a5fa, $accent);
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: $surface;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-initials {
  font-size: 2.4rem;
  font-weight: 700;
  color: $accent;
  letter-spacing: 0.05em;
}

// ─── CONTENT ───────────────────────────────────────────────
.content-area {
  padding-top: 40px;
  padding-bottom: 60px;
}

.left-col {
  padding-right: 32px;
}

// ─── SECTION HEADER ────────────────────────────────────────
.section-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.section-icon {
  color: $accent !important;
  font-size: 1.1rem !important;
}

.section-title {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: $accent;
}

.section-block {
  margin-bottom: 8px;
}

.section-divider {
  border-color: $border !important;
  margin: 28px 0 !important;
}

// ─── SKILLS ────────────────────────────────────────────────
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.skill-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: 0.85rem;
  font-weight: 500;
  color: $text;
}

.skill-badge {
  font-size: 0.6rem !important;
}

.skill-bar {
  border-radius: 4px;
}

// ─── LANGUAGES ─────────────────────────────────────────────
.lang-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lang-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.lang-dot {
  color: $accent !important;
  font-size: 1.4rem !important;
}

.lang-name {
  font-size: 0.88rem;
  font-weight: 500;
  color: $text;
  flex: 1;
}

.lang-level {
  font-size: 0.76rem;
  color: $muted;
}

// ─── EDUCATION ─────────────────────────────────────────────
.edu-block {
  background: $surface2;
  border: 1px solid $border;
  border-radius: 12px;
  padding: 16px 18px;
}

.edu-degree {
  font-size: 0.85rem;
  font-weight: 600;
  color: $text;
  margin-bottom: 4px;
  line-height: 1.4;
}

.edu-institution {
  font-size: 0.78rem;
  color: $muted;
  margin-bottom: 12px;
}

.edu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.edu-period {
  font-size: 0.75rem;
  color: $muted;
}

// ─── TIMELINE ──────────────────────────────────────────────
.timeline {
  display: flex;
  flex-direction: column;
}

.timeline-item {
  display: flex;
  gap: 20px;
}

.timeline-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 4px;
}

.tl-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 10px currentColor;
}

.tl-line {
  width: 2px;
  flex: 1;
  background: $border;
  margin-top: 6px;
  margin-bottom: 0;
  min-height: 24px;
}

.tl-card {
  background: $surface;
  border: 1px solid $border;
  border-radius: 14px;
  padding: 20px 22px;
  margin-bottom: 20px;
  flex: 1;
  transition:
    border-color 0.25s,
    transform 0.25s;

  &:hover {
    border-color: rgba(245, 158, 11, 0.25);
    transform: translateY(-2px);
  }
}

.tl-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.job-title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 4px;
}

.job-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
}

.job-company {
  font-weight: 600;
}

.job-sep {
  color: $muted;
}

.job-period {
  color: $muted;
}

.job-description {
  font-size: 0.84rem;
  line-height: 1.7;
  color: #9ca3af;
  margin-bottom: 16px;
}

.tech-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-chip {
  font-size: 0.68rem !important;
}

// ─── RESPONSIVE ────────────────────────────────────────────
@media (max-width: 960px) {
  .left-col {
    padding-right: 12px;
  }

  .hero-section {
    padding: 36px 0 32px;
  }
}
</style>
