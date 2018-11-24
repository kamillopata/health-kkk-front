<template>
  <div>
    <h2>Visit</h2>
    <pre>{{ details }}</pre>
  </div>
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
