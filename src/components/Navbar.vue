<template>
 <nav>
    <v-app-bar app dark elevate-on-scroll>
      <!-- <v-app-bar-nav-icon 
        class="grey--text"
        @click="drawer= !drawer">
      </v-app-bar-nav-icon> -->
    <v-container class="d-flex ma-0 pa-0 mx-md-auto px-md-auto">
      <div class="my-auto hidden-md-and-up">
        <v-icon size="30" class="mr-2" @click.stop="drawer= !drawer">mdi-menu</v-icon>
      </div>
    
    <div class="my-auto">
      <div class="text-h6 grey--text font-weight-bold">Portfolio</div>
    </div>  
    <v-spacer></v-spacer>

    <v-btn to="/" class="my-auto hidden-md-and-down ml-4" text>
      Home
    </v-btn>
    <v-btn to="/about" class="my-auto hidden-md-and-down ml-4" text>
      About
    </v-btn>
    

    </v-container>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="grey lighten-2">
      <v-list>
        <v-list-item-group v-model="selectItem">
          <v-list-item v-for="(item, i) in assets" :key="i" @click="$router.push(item.route)">
            <v-list-item-actions>
              <v-icon left size="25" color="deep-orange">{{ item.icon }}</v-icon>
            </v-list-item-actions>
            <v-list-item-content>
              <v-list-item-title class="orange--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>

  export default {
    data () {
      return{
        drawer: false,
        selectItem: 0,

        assets: [
          {
            icon:'mdi-home-account', title: 'Home', route: '/'
          },
          {
            icon:'mdi-application-edit-outline', title: 'About', route: '/about'
          },
        ]
      }
    }
     
  
};
</script>
