<template>
  <v-flex xs12 sm8 md4 mt-5>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login form</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
          prepend-icon="person"
          v-model="credentials.username"
          :label="$t('login.username')"
          type="text"
          />
          <v-text-field
          prepend-icon="lock"
          v-model="credentials.password"
          :label="$t('login.password')"
          type="password"
          @keyup.enter="login"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click.enter="login">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import Api from '../functions/api';
import Router from '../router';

export default {

  name: 'Login',

  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      const token = await Api.login(this.credentials);
      if (!token) {
        return;
      }

      this.$store.dispatch('updateToken', token);
      Router.push({ name: 'agenda' });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
