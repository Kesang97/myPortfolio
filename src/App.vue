<template>
  <v-app>
    <v-main>
      
      <myHome/>
    </v-main>
  </v-app>
</template>

<script>
import myHome from './components/myHome.vue';

export default {
  name: 'App',

  components: {
    myHome,
  },

  data: () => ({
    //
  }),
};
</script>
