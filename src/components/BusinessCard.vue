<script lang="ts" setup>
const contactOptions = [
  {
    label: "bmtailan@gmail.com",
    icon: "mdi-email",
    action: () => {},
  },
  {
    label: "https://github.com/Typhs/",
    icon: "custom:git",
    action: () => {
      window.open("https://github.com/Typhs/", "_blank")?.focus();
    },
  },
  {
    label: window.location.host,
    icon: "mdi-cursor-default ",
    action: () => {
      window.open(window.location.origin, "_blank")?.focus();
    },
  },
] as const;
</script>

<template>
  <div data-git-path="src/components/BusinessCard.vue">
    <perspective-card
      bg-image="dynamicAssets/paper-texture.jpg"
      width="525px"
      height="300px"
      :background-parallax="false"
    >
      <template #default="{ isHovered }">
        <div class="business-card-container">
          <div class="business-card">
            <div>
              <div class="w-fit-content vertical-flex-container">
                <!-- LEFT  -->
                <div class="w-fit-content mb-5">
                  <h2>Tailan B. M.</h2>
                  <div class="w-100 bg-white mb-1">
                    <v-divider
                      color="primary"
                      width="40px"
                      thickness="2"
                      class="border-opacity-100"
                    />
                  </div>
                  <div>Lead Front-End developer</div>
                </div>

                <div>
                  <v-btn
                    class="mb-2 pl-0 pr-2 d-block"
                    color="white"
                    variant="text"
                    v-for="(contact, cIdx) in contactOptions"
                    :key="cIdx"
                    @click="contact.action()"
                  >
                    <v-avatar
                      variant="flat"
                      size="30"
                      color="primary"
                      class="mr-2"
                      rounded="rounded"
                    >
                      <v-icon :icon="contact.icon" />
                    </v-avatar>
                    <span class="">
                      {{ contact.label }}
                    </span>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="card-bg-effect" style="font-size: 10px">
            <div>
              <bubbling-icons-animation
                height="350px"
                multiplier="4"
                size="20"
              />
            </div>
          </div>
        </div>
      </template>
    </perspective-card>
  </div>
</template>

<style lang="scss" scoped>
.business-card-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.business-card {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  color: $white;
  font-size: 17px;
  text-align: left;
  padding: 8px;
  > div {
    height: 100%;
    width: 100%;
    border: 1px solid transparentize($white, 0.7);
    padding: 10px 15px;
  }
}

.vertical-flex-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.card-bg-effect {
  position: absolute;
  right: -35%;
  top: 0;
  height: 100%;
  width: 100%;
  transform: rotate(-70deg);
  z-index: 0;
  pointer-events: none;
}
</style>
