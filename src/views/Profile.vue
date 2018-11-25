<template>
  <v-layout wrap row>
    <h1 v-text="$t('profile.title')" class="heading mb-3"></h1>
    <v-flex xs12 v-if="scope !== 'advanced'">
      <v-text-field v-model="profile.age" :label="$t('profile.yearOfBirth')" required />
      <v-radio-group v-model="profile.sex">
        {{ $t('profile.sex') }}
        <v-radio :label="$t('profile.male')" value="m" />
        <v-radio :label="$t('profile.female')" value="f" />
      </v-radio-group>
      <v-text-field v-model="profile.city" :label="$t('profile.city')" required />
    </v-flex>
    <v-flex xs12 v-if="scope !== 'basic'">
      <v-switch :label="$t('profile.diabets')" v-model="profile.diabets" />
      <v-switch :label="$t('profile.diet')" v-model="profile.diet" />
      <v-switch :label="$t('profile.disability')" v-model="profile.disability" />
      <v-switch :label="$t('profile.allergy')" v-model="profile.allergy" />
      <v-switch :label="$t('profile.cancerInFamily')" v-model="profile.cancerInFamily" />
      <v-switch :label="$t('profile.jobType')" v-model="profile.jobType" />
      <v-switch :label="$t('profile.sportActivity')" v-model="profile.sportActivity" />
    </v-flex>
    <v-flex xs12>
      <v-btn @click="save" color="info">{{ $t('profile.save') }}</v-btn>
    </v-flex>
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
    scope: {
      required: false,
      type: String,
      default: '',
      validator: val => ['', 'basic', 'advanced'].includes(val),
    },
  },
  data() {
    return {
      profile: {},
    };
  },
  methods: {
    save() {
      Api.patchProfile(this.profile);
    },
  },
  async created() {
    this.profile = await Api.getProfile(this.profileId);
  },
};
</script>

<style lang="scss" scoped>
</style>
