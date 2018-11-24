<template>
  <div>
    <h1 v-if="!timetable.length">Sorry, no scheduled visits :(</h1>
    <visit v-for="visit in timetable" :details="visit" :key="visit.id"/>
  </div>
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
  created() {
    this.timetable = Api.getTimetable();
  },
};
</script>

<style lang="scss" scoped>
</style>
