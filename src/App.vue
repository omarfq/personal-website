<template>
  <v-app dark>
    <v-toolbar dark>
      <v-toolbar-title>Example</v-toolbar-title>
    </v-toolbar>
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
