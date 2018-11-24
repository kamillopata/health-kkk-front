<template>
  <v-layout wrap row>
    <h1 v-if="!timetables.length" v-text="$t('agenda.no_offers')"></h1>

    <template v-for="visit in timetables">
      <v-flex xs2 sm1 my-3 :key="`date-${visit.id}`">
        <div mb-1 class="headline">{{ getNumericDay(visit.startDate.date) }}</div>
        <div>{{ getShortWeekday(visit.startDate.date) }}</div>
      </v-flex>
      <visit
        :details="visit"
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
      timetables: [],
      profiles: [],
      focusedTimetable: null,
    };
  },
  methods: {
    ...DateParser,
  },
  async created() {
    this.timetables = await Api.getTimetables();
    this.profiles = await Api.getProfiles();
  },
};
</script>

<style lang="scss" scoped>
</style>
