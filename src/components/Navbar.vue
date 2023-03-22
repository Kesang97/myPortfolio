<template>
 <nav>
    <v-app-bar app dark elevate-on-scroll>
      <v-app-bar-nav-icon 
        class="grey--text"
        @click="drawer= !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
          <span class="text-h6">Portfolio</span>
      </v-toolbar-title>
     <v-spacer></v-spacer>
    <div class="d-flex justify-space-between ">
      <v-btn text class="hidden-md-and-down">
        <v-icon left size="20" color="green darken-1">mdi-folder</v-icon>
        <div class="text-caption text-lowercase">kesangs99@gmail.com</div>
      </v-btn>
      <v-btn text class="hidden-md-and-down">
        <v-icon left size="20" color="green darken-1">mdi-phone</v-icon>
        <div class="text-caption text-lowercase">+91 7477308037</div>
      </v-btn>
    </div>
   
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="grey lighten-2">
      <v-list>
        <v-list-item-group v-model="selectItem">
          <v-list-item v-for="(item, i) in assets" :key="i" @click="$router.push(item.route)">
            <v-list-item-actions>
              <v-icon left size="25" color="deep-orange">{{ item.icon }}</v-icon>
            </v-list-item-actions>
            <v-list-item-content>
              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
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
