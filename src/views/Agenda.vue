<template>
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
  methods: {
    ...DateParser,
    async fetchActiveProfile() {
      const profileId = this.profiles[this.activeProfile].id;
      this.timetable = await Api.getTimetable(profileId);
    }
  },
  async created() {
    this.profiles = await Api.getProfiles();
    this.fetchActiveProfile();
  },
  watcher: {
    activeProfile() {
      fetchActiveProfile();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
