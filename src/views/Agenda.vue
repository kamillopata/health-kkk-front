<template>
  <v-layout wrap row>
    <h1 v-if="!timetable.length">Sorry, no scheduled visits :(</h1>
    <visit v-for="visit in timetable" :details="visit" :key="visit.id"/>
  </v-layout>
</template>

<script>
import Visit from '../components/Visit.vue';
import Api from '../functions/api';

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
  async created() {
    this.timetable = await Api.getTimetable();
  },
};
</script>

<style lang="scss" scoped>
</style>
