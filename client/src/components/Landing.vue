<template>
  <v-container
    fluid
    fill-height
    text-xs-center
    style="background: linear-gradient(158deg, rgba(0,0,121,1) 0%, rgba(0,187,255,1) 100%);"
  >
    <v-layout align-center>
      <v-flex>
        <v-progress-circular :rotate="-90" :size="220" :width="20" :value="value" color="#B3E5FC">
          <h5 class="headline">{{ value }}% Completed</h5>
        </v-progress-circular>
        <h5 class="display-1 mt-5">My website is currently under development.</h5>
        <h6 class="title mt-3">Here are a few links that you might be interested in 😁</h6>
        <v-btn large color="amber darken-3" class="mt-5" href="Resume.pdf" target="_blank">
          <v-icon left dark>description</v-icon>Resumé
        </v-btn>
        <v-btn large color="#43A047" class="mt-5" target="_blank" href="https://github.com/omarfq">
          <i class="fab fa-github icon"></i>
          GitHub
        </v-btn>
        <v-btn large color="#057db5" class="mt-5" target="_blank" href="https://www.linkedin.com/in/omar-flores-83a7b3106/">
          <i class="fab fa-linkedin icon"></i>
          LinkedIn
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { setInterval } from "timers";
export default {
  data() {
    return {
      value: 0,
      limit: 85,
      interval: {}
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === this.limit) {
        return;
      }
      this.value += 1;
    }, 10);
  }
};
</script>   

<style lang="scss" scoped>
.blur {
  filter: blur(10px);
}

.bg-img {
  background-image: url("../assets/bg-imageBLURRED.jpg");
  width: 100vw;
  height: 100vh;
}

.no-blur {
  filter: blur(0) !important;
}

.icon {
  font-size: 1.5rem;
  margin-right: 15px;
}
</style>
