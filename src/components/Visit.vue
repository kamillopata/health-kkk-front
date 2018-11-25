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
        <v-dialog v-model="rescheduling" width="500">
          <v-btn slot="activator" small>
            <v-icon>event</v-icon>
            {{ $t('visit.reschedule') }}
          </v-btn>

          <v-card>
            <v-card-text>
              <v-date-picker
                v-model="details.startDate"
                :reactive="true"
                color="#ea0a8c"
                header-color="#ea0a8c"
              />
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#ea0a8c" flat @click="reschedule">
                {{ $t('visit.reschedule') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn small>
          <v-icon>done</v-icon>
          {{ $t('visit.markAsDone') }}
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark :href="searchClinic" target="_blank" color="#ea0a8c">
          <v-icon>local_hospital</v-icon>
          {{ $t('visit.findClinic') }}
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
      rescheduling: false,
    };
  },
  computed: {
    searchClinic() {
      const query = `${this.details.examination.name} ${this.profile.city}`;
      return `https://google.com/search?q=${encodeURIComponent(query)}`;
    },
  },
  methods: {
    reschedule() {
      // TODO: make a query to update in db
      this.rescheduling = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
