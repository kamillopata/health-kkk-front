<template>
  <section>
    <v-parallax src="https://raw.githubusercontent.com/vuetifyjs/parallax-starter/master/template/assets/hero.jpeg" height="600">
      <v-layout column align-center justify-center>
        <h1 class="mb-2 display-1 text-xs-center">
          {{ $t('home.title') }}
        </h1>
        <div class="subheading mb-3 text-xs-center">
          {{ $t('home.subtitle') }}
        </div>
        <v-btn class="primary mt-5" large href="/register">
          {{ $t('home.CTA') }}
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {

  name: 'Home',

  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
</style>
