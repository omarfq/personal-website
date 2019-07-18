<template>
  <v-app dark>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import Home from "./components/Home.vue";
import Landing from "./components/Landing.vue";
import Contact from './components/Contact.vue';

export default {
  name: "App",
  components: {
    // appHome: Home,
    appLanding: Landing,
    appContact: Contact
  },
  data() {}
};
</script>

<style>
html {
  font-size: 62.5%;
  color: rgba(3, 169, 244);
}

.no-blur {
  filter: blur(0) !important;
}

.blur {
  filter: blur(10px);
}

.bg-img {
  background-image: url('./assets/bg-imageBLURRED.jpg');
  width: 100vw;
  height: 100vh;
} 

</style>
