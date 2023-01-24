<template>
 <section>
    <v-app-bar color="black lighten-4" app flat dark>
      <v-container>
        <v-row>
          <v-col cols="6">
            <div class="d-flex justify-start">
              <div class="text-h6">Portfolio</div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="d-flex justify-center">
              <v-btn text class="grey">
                <v-icon left size="30" color="green darken-1">mdi-folder</v-icon>
                <div class="subtitle-2 text-lowercase">kesangs@gmail.com</div>
              </v-btn>
              <v-chip text class="grey ml-4 my-auto">
                <v-icon left size="20" color="green darken-1">mdi-phone</v-icon>
                <div class="subtitle-2 text-lowercase">+91 8345086681</div>
              </v-chip>
            </div>
            
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
 </section>
</template>

<script>

  export default {
    data: () => ({
     
  })
};
</script>
