<template>
  <v-flex xs10 sm11 my-2 @click="$emit('focus')">
    <v-card>
      <v-card-text>
        <div class="headline">
          {{ details.examination.name }}
        </div>
        <div class="font-weight-light">
          {{ details.duration }}
        </div>
        <div :class="{ 'text-truncate': !focus }">
          {{ details.examination.description }}
        </div>
      </v-card-text>
      <v-card-actions v-show="focus">
        <v-btn small>
          <v-icon>event</v-icon>
          {{ $t('visit.reschedule') }}
        </v-btn>
        <v-btn small>
          <v-icon>done</v-icon>
          {{ $t('visit.markAsDone') }}
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-flex xs12 sm4 text-xs-right>
        <v-btn :href="searchClinic" target="_blank" color="primary">
          <v-icon>local_hospital</v-icon>
          {{ $t('visit.findClinic') }}
        </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {

  name: 'Visit',
  props: {
    profile: {
      required: true,
      type: Object,
    },
    details: {
      required: true,
      type: Object,
    },
    focus: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {

    };
  },
  computed: {
    searchClinic() {
      const query = `${this.details.examination.name} ${this.profile.city}`;
      return `https://google.com/search?q=${encodeURIComponent(query)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .text-truncate {
    transition: height 3s ease-in;
  }
</style>
