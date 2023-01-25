<template>
  <v-app class="black lighten-2">
    <Navbar/>
    <v-main class="mx-4 mb-4">
      <router-view/>
    </v-main>
  </v-app>
    
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components:{
    Navbar
  },
  data(){
    return{

    }
  }
};
</script>

<style lang="scss">
// #app {./components/Navbar.vue
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
