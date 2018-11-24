<template>
  <v-flex xs10 sm11 my-2>
    <v-card>
      <v-card-title>
        <div>
          <div class="headline">
            {{ details.examination.name }}
          </div>
          <div class="font-weight-light">
            {{ details.duration }}
          </div>
        </div>
      </v-card-title>
      <v-card-text v-if="false">{{ details.examination.description }}</v-card-text>
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
