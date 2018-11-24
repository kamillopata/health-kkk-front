<template>
  <div>
    <visit v-for="visit in 3" />
  </div>
</template>

<script>
import Visit from '../components/Visit.vue';

export default {

  name: 'Agenda',
  components: {
    Visit,
  },

  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
</style>
