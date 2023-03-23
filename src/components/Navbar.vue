<template>
  <nav>
    <v-app-bar app dark elevate-on-scroll>
      <v-container class="d-flex ma-0 pa-0 mx-md-auto px-md-auto">
        <div class="my-auto hidden-md-and-up">
          <v-icon size="30" class="mr-2" @click.stop="drawer = !drawer"
            >mdi-menu</v-icon
          >
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

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="grey lighten-2"
    >
      <v-list nav dense>
        <v-list-item class="my-2">
          <v-list-item-avatar size="50">
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-img>
          </v-list-item-avatar>
          <v-list-item-title>
            <div class="text-subtitle">Kelzang Sherpa</div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list nav dense>
        <v-list-item-group color="black" v-model="selectItem">
          <v-list-item
            v-for="(item, i) in assets"
            :key="i"
            class="mb-3"
            @click="$router.push(item.route)"
          >
            <v-list-item-actions>
              <v-icon left size="25" color="black">{{ item.icon }}</v-icon>
            </v-list-item-actions>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectItem: 0,

      assets: [
        {
          icon: "mdi-home-account",
          title: "Home",
          route: "/",
        },
        {
          icon: "mdi-application-edit-outline",
          title: "About",
          route: "/about",
        },
      ],
    };
  },
};
</script>
