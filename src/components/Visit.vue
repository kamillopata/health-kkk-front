<template>
  <v-flex xs10 sm11 my-2>
    <v-card>
      <v-card-text>
        <div class="headline">
          {{ details.examination.name }}
        </div>
        <div class="font-weight-light">
          {{ details.duration }}
        </div>
        <div :class="{ 'text-truncate': !focus }" @click="$emit('focus')">
          {{ details.examination.description }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn :icon="true"><v-icon>event</v-icon></v-btn>
        <v-btn>{{ $t('visit.mark_as_dome') }}</v-btn>
        <v-btn :href="searchClinic" target="_blank" color="primary">
          {{ $t('visit.find_clinic') }}
        </v-btn>
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
      const query = `${this.details.examination.name}+${this.profile.city}`;
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
