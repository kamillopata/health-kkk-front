<template>
  <v-container fluid>
    <v-flex xs12 sm8 md4 mt-5>
      <v-card class="elevation-12">
        <v-toolbar dark color="#ea0a8c">
          <v-toolbar-title>
            {{ $t('login.loginTitle') }}
          </v-toolbar-title>
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
          <v-btn dark color="#ea0a8c" @click.enter="login">
            {{ $t('login.loginCTA') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-container>
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
