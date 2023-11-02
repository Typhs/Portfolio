<script lang="ts" setup>
// TODO - add 'action' field to this Array -> call it when button is clicked
const contactOptions = [
  {
    href: "bmtailan@gmail.com",
    label: "bmtailan@gmail.com",
    icon: "mdi-email",
  },
  {
    label: "https://github.com/Typhs/",
    href: "https://github.com/Typhs/",
    icon: "mdi-github",
  },
  {
    label: "www.this-website.com", // TODO -> update website address
    href: "www.this-website.com",
    icon: "mdi-cursor-default ",
  },
] as const;
</script>

<template>
  <perspective-card
    data-image="src/assets/paper-texture.jpg"
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
                <div>Senior Front-end developer</div>
              </div>

              <div>
                <v-btn
                  class="mb-2 pl-0 pr-2 d-block"
                  color="white"
                  variant="text"
                  v-for="(contact, cIdx) in contactOptions"
                  :key="cIdx"
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
          <div class="animation-container">
            <bubbling-icons-animation height="100%" multiplier="8" size="20" />
          </div>
        </div>
      </div>
    </template>
  </perspective-card>
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
