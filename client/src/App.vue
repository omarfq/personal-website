<template>
  <v-app dark>
    <v-content>
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",
  data() {
    return {}
  },
}
</script>
