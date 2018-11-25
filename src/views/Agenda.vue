<template>
  <div>
    <v-flex xs12>
      <v-alert v-if="!isProfileAdvanced" :value="true" type="info">
        {{ $t('agenda.updateProfile') }}
        <router-link :to="profileAdvanced">
          <v-btn color="warning">
            {{ $t('agenda.updateProfileCTA') }}
          </v-btn>
        </router-link>
      </v-alert>
    </v-flex>

    <v-container fluid>
      <v-layout wrap row>
        <h1 v-if="!timetable.length" v-text="$t('agenda.noOffers')"></h1>

        <template v-for="visit in timetable">
          <v-flex xs2 sm1 my-3 :key="`date-${visit.id}`">
            <div mb-1 class="headline">{{ getNumericDay(visit.startDate) }}</div>
            <div>{{ getShortMonth(visit.startDate) }}</div>
            <div>{{ getShortWeekday(visit.startDate) }}</div>
          </v-flex>
          <visit
            :details="visit"
            :profile="profiles[activeProfile]"
            :key="`visit-${visit.id}`"
            @focus="focusedTimetable = visit.id"
            :focus="focusedTimetable === visit.id"
          />
        </template>

        <!-- <v-fab-transition>
          <v-btn dark color="#ea0a8c" fab fixed top right>
            <v-icon>event</v-icon>
          </v-btn>
        </v-fab-transition> -->
      </v-layout>
    </v-container>

    <br>
    <br>
    <br>
    <br>

    <v-bottom-nav v-if="profiles.length" fixed :active.sync="activeProfile" :value="true">
      <v-btn
        v-for="(profile, index) in profiles"
        color="#ea0a8c"
        flat
        :value="index"
        :key="profile.id"
      >
        <span v-text="profile.name || profile.age"></span>
        <v-icon>person</v-icon>
      </v-btn>

      <!-- <v-btn color="#ea0a8c" flat value="favorites">
        <span v-text="$t('agenda.addProfile')"></span>
        <v-icon>add_circle_outline</v-icon>
      </v-btn> -->
    </v-bottom-nav>
  </div>
</template>

<script>
import Visit from '../components/Visit.vue';
import Api from '../functions/api';
import DateParser from '../functions/DateParser';

export default {

  name: 'Agenda',
  components: {
    Visit,
  },

  data() {
    return {
      timetable: [],
      profiles: [],
      focusedTimetable: null,
      activeProfile: 0,
    };
  },
  computed: {
    activeProfileId() {
      if (!this.profiles.length) {
        return null;
      }

      return this.profiles[this.activeProfile].id;
    },
    isProfileAdvanced() {
      if (!this.profiles.length) {
        return null;
      }

      const profile = this.profiles[this.activeProfile];

      // eslint-disable-next-line max-len
      return profile.allergy || profile.cancerInFamily || profile.diabets || profile.diet || profile.disability || profile.jobType || profile.sportActivity;
    },
    profileAdvanced() {
      return {
        name: 'profile-specific',
        params: {
          profileId: this.activeProfileId,
          scope: 'advanced',
        },
      };
    },
  },
  methods: {
    ...DateParser,
    async fetchActiveProfile() {
      this.timetable = await Api.getTimetable(this.activeProfileId);
    },
  },
  async created() {
    this.profiles = await Api.getProfiles();
    this.fetchActiveProfile();
  },
  watch: {
    activeProfile() {
      this.fetchActiveProfile();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
