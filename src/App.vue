<template>
  <v-app>
    <v-navigation-drawer app />
    <v-toolbar app />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
};
</script>
