<template>
  <section>
    <v-container class="my-5">
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex d-md-flex justify-md-start justify-center mb-2">
            <div class="text-h4 text-md-h3">Hey! i m Kelzang Sherpa</div>
          </div>
          <div class="pt-4 pb-2">
            <div class="text-subtitle text--secondary">
             A FrontEnd focused Web developer building the Frontend of  Websites and Web Applications that leads to the success of the overall product.
            </div>
          </div>
          <v-btn dark large rounded color="light-blue darken-3 mt-5">
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
            <div class="text-h4 text-md-h3 font-weight-bold text-justify">Get in touch today to schedule your call</div>
            <div class="d-flex pt-3 pb-4">
              <v-btn text>
                <v-icon left size="18" color="black">mdi-email</v-icon>
                <div class="text-caption text-lowercase">sherpamrk@gmail.com</div>
              </v-btn>
              <v-btn text class="ml-4">
                <v-icon left size="18" color="black">mdi-phone</v-icon>
                <div class="text-caption text-lowercase">+91 8345086681</div>
              </v-btn>
            </div>

            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                outlined
                dense
                v-model="name"
                label="Name"
                class="black--text mb-2"
                :rules="nameRules"
              >
              </v-text-field>
        
              <v-text-field
                outlined
                dense
                v-model="email"
                label="E-mail"
                class="black--text mb-2"
                :rules="emailRules"
              ></v-text-field>

              <v-textarea
                outlined
                dense
                name="input-7-1"
                label="Message"
                class="black--text"
                v-model="message"
                value="Your message here!!!"
                :rules="messageRules"
              >
              </v-textarea>
            
            <div class="mt-4">
              <v-btn @click="submit" :disabled="!valid" large class="text-lowercase white--text" color="black lighten-1">
                Submit
              </v-btn>
            </div>
          </v-form>
          </div>
          
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
// @ is an alias to /src
import swal from 'sweetalert';

export default {
  name: 'Home',
 
  data(){
    return{
      name: '',
      email: '',
      message: '',
      valid: true,

      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v).length <=15 && (v).length >=3 || 'Name must be less than 15 characters'
      ],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'Email must be valid'
      ],
      messageRules:[
        (v) => !!v || 'Message is required',
       
      ]

    }
  },
  methods:{
    submit(){
      this.$refs.form.validate();
      if (!this.$refs.form.validate()) {
        swal("Some Fields are Missing", "Please fill out the form", "error");
      } else {
        swal(
          "Success",
          "Your form has been Submitted",
          "success"
        );
        this.$refs.form.reset();
      }

      
    }
  }
};
</script>
