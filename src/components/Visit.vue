<template>
  <v-flex xs10 offset-xs2 my-2>
    <v-card pa-2>
      <v-card-title primary-title class="headline">{{ details.examination.name }}</v-card-title>
      <v-card-text class="font-weight-light">
        {{ $t('visit.period') }}
        {{ details.duration }}
      </v-card-text>
      <v-card-text>{{ details.examination.description }}</v-card-text>
      <v-card-actions>
        <v-btn flat icon><v-icon>event</v-icon></v-btn>
        <v-btn color="">Visited</v-btn>
        <v-btn color="primary">Find place</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  name: 'Visit',
  props: {
    details: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
</style>
