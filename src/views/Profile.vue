<template>
  <v-container fluid>
    <v-layout wrap row>
      <h1 v-text="$t('profile.title')" class="heading mb-3"></h1>
      <v-flex xs12 v-if="scope !== 'advanced'">
        <v-text-field v-model="profile.name" :label="$t('profile.name')" required />
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
        <v-btn @click="save" dark color="#ea0a8c">{{ $t('profile.save') }}</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Api from '../functions/api';
import Router from '../router';

export default {

  name: 'Profile',
  props: {
    profileId: {
      required: false,
      // type: String, // TODO: problem number/string
      default: null,
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
      profile: {
        name: '',
        age: '',
        sex: '',
        country: 'PL',
        city: '',
        diabets: false,
        diet: false,
        disability: false,
        allergy: false,
        cancerInFamily: false,
        jobType: false,
        sportActivity: false,
      },
    };
  },
  methods: {
    async save() {
      if (this.profileExists) {
        Api.patchProfile(this.profile);
      } else {
        this.profileId = await Api.postProfile(this.profile);
      }

      Router.push({
        name: 'agenda',
      });
    },
  },
  computed: {
    profileExists() {
      return this.profileId !== '_';
    },
  },
  async created() {
    if (this.profileExists) {
      this.profile = await Api.getProfile(this.profileId);
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
