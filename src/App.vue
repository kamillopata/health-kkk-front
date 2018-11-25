<template>
  <v-app>
    <v-toolbar app v-if="$route.meta.requiresAuth === false">
      <router-link to="register">
        <v-btn flat>
          {{ $t('register.registerCTA') }}
        </v-btn>
      </router-link>
      <router-link to="login">
        <v-btn flat>
          {{ $t('login.loginCTA') }}
        </v-btn>
      </router-link>
    </v-toolbar>
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
