<template>
  <v-app dark>
    <v-toolbar dark>
      <v-toolbar-title>Omar Flores</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <app-circular-menu></app-circular-menu>
    </v-content>
  </v-app>
</template>

<script>
import CircularMenu from "./components/CircularMenu.vue";

export default {
  name: "App",
  components: {
    appCircularMenu: CircularMenu
  },
  data() {
    return {
      menuItems: [
        { icon: "description", title: "Resumé", link: "/" },
        { icon: "settings_ethernet", title: "Projects", link: "/" }
      ]
    };
  }
};
</script>

<style>

html {
  font-size: 62.5%;
}
body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
}


</style>
