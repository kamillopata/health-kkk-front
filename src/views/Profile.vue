<template>
  <v-layout wrap row>
    <h1 v-text="$t('profile.title')" class="heading mb-3"></h1>
    <v-form>
      <template>
      <v-text-field v-model="profile.age" :label="$t('profile.year_of_birth')" required />
      <v-radio-group v-model="profile.sex">
        {{ $t('profile.sex') }}
        <v-radio :label="$t('profile.male')" value="m" />
        <v-radio :label="$t('profile.female')" value="f" />
      </v-radio-group>
      <v-text-field v-model="profile.city" :label="$t('profile.city')" required />
      </template>
    </v-form>
  </v-layout>
</template>

<script>
import Api from '../functions/api';

export default {

  name: 'Profile',
  props: {
    profileId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      profile: {},
    };
  },
  async created() {
    this.profile = await Api.getProfile(this.profileId);
  },
};
</script>

<style lang="scss" scoped>
</style>
