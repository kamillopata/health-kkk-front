<template>
  <div>
    <v-flex xs12>
      <v-alert :value="true" type="info">
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

        <v-fab-transition>
          <v-btn color="error" fab fixed bottom right>
            <v-icon>event</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-layout>
    </v-container>
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
  watcher: {
    activeProfile() {
      this.fetchActiveProfile();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
