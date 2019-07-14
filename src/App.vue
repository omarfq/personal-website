<template>
  <v-app dark>
    <v-content>
      <app-home></app-home>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    appHome: Home
  },
  data() {}
};
</script>

<style>
html {
  font-size: 62.5%;
}

</style>
