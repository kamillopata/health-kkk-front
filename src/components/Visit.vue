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
        <v-btn>{{ $t('visit.mark_as_dome') }}</v-btn>
        <v-btn :href="searchClinic" target="_blank" color="primary">
          {{ $t('visit.find_clinic') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapState } from 'vuex';

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
  computed: {
    ...mapState([
      'user',
    ]),
    searchClinic() {
      const query = `${this.details.examination.name}+${this.user.city}`;
      return `https://google.com/search?q=${encodeURIComponent(query)}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
