<template>
  <v-layout wrap row>
    <h1 v-if="!timetable.length" v-text="$t('agenda.no_offers')"></h1>

    <template v-for="visit in timetable">
      <v-flex xs2 sm1 my-2 :key="`date-${visit.id}`">
        <div mb-1 class="headline">{{ getNumericDay(visit.startDate.date) }}</div>
        <div>{{ getShortWeekday(visit.startDate.date) }}</div>
      </v-flex>
      <visit :details="visit" :key="`visit-${visit.id}`" />
    </template>
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
    };
  },
  methods: {
    ...DateParser,
  },
  async created() {
    this.timetable = await Api.getTimetable();
  },
};
</script>

<style lang="scss" scoped>
</style>
