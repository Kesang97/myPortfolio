<template>
  <section>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex d-md-flex justify-md-start justify-center mb-2">
            <div class="text-h3">I m a Creative Graphic and Web Designer</div>
          </div>
          <div class="text-left mb-4">
            <div class="subtitle-2">
              A Junior FrontEnd Developer Currently Working for Two Wheeler Rental Ontrack pvt ldt. 
            </div>
          </div>
          <v-btn depressed dark rounded color="light-blue darken-3 mt-5">
            Connect With Me
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <div class="d-flex d-md-flex justify-md-end justify-center">
            <v-responsive>
              <v-img src="../assets/Seo-profile.png" contain height="350px">
              </v-img>
            </v-responsive>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-5">
      <v-row>
        <v-col cols="12" md="6" sm="12" lg="6">
            <div class="d-flex d-md-flex justify-center justify-md-start">
            <v-card class="rounded-0" outlined color="grey lighten-2">
              <v-img src="../assets/contact-img.png" contain height="400px" width="500px" class="hidden-md-and-down">
              </v-img>
            </v-card>
          </div>
        </v-col>
        <v-col cols="12" md="6" sm="12" lg="6">
          <div class="my-auto">
            <div class="text-h3 font-weight-bold text-justify">Get in touch today to schedule your call</div>
            <div class="d-flex mt-2">
              <v-btn text>
                <v-icon left size="18" color="black">mdi-email</v-icon>
                <div class="text-caption text-lowercase">sherpamrk@gmail.com</div>
              </v-btn>
              <v-btn text class="ml-4">
                <v-icon left size="18" color="black">mdi-phone</v-icon>
                <div class="text-caption text-lowercase">+91 8345086681</div>
              </v-btn>
            </div>

              <form>
              <v-text-field
                v-model="name"
                label="Name"
                class="black--text"
                required
              >
              </v-text-field>
        
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>

              <v-textarea
                name="input-7-1"
                label="Message"
                v-model="message"
                value="Your message here!!!"
              >
              </v-textarea>
            
            <v-btn @click="submit" depressed class="text-lowercase" rounded color="black lighten-1" dark>
              Submit
            </v-btn>
            </form>
            
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
 
  data(){
    return{
      name: '',
      phoneNumber: '',
      email: '',
      message: ''
    }
  },
  methods:{
    submit(){
      console.log("Form is submitted successfully")
    }
  }
};
</script>
