<template>
  <v-container fluid>
    <v-flex xs12 sm8 md4 mt-5>
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>
            {{ $t('register.registerTitle') }}
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="person"
              v-model="credentials.username"
              :label="$t('register.username')"
              type="text"
            />
            <v-text-field
              prepend-icon="lock"
              v-model="credentials.password"
              :label="$t('register.password')"
              type="password"
              @keyup.enter="register"
            />
            <v-checkbox
              :label="$t('register.termsAndConditions')"
              v-model="terms"
              required
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.enter="register">
            {{ $t('register.registerCTA') }}
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

  name: 'Register',

  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
      terms: false,
    };
  },
  methods: {
    async register() {
      const token = await Api.register(this.credentials);
      if (!token) {
        return;
      }

      this.$store.dispatch('updateToken', token);

      const profiles = await Api.getProfiles();

      Router.push({
        name: 'profile-specific',
        params: {
          profileId: profiles[0].id,
          scope: 'basic',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
