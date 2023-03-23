<template>
  <section>
    <v-container class="mt-8 mb-10">
      <v-row>
        <v-col cols="12" md="5">
          <v-img contain src="../assets/aboutme-Bg.jpg" width="300px" class="about-Img mb-3 mb-md-0 mx-auto">
          </v-img>
        </v-col>
        <v-col cols="12" md="7">
          <v-card outlined class="rounded-0" style="border: 2px dashed grey">
            <v-container>
              <div class="text-h4 text-center font-weight-bold">
                <div class="text-subtitle">About Me</div>
                  <div class="mx-auto my-1 black rounded" style="width:60px; height:7px;">
                </div>
              </div>
              <div class="subtitle-1 text-center text--secondary font-weight-bold pt-3 pb-3">
                Hello i m Kelzang Sherpa , currently working for On-track Monthly rentals company
                located at Bangalore, indiranagar 9th main, HAL-3 , 560008.
                Since i have started my software developer carrier from august 2022 and its been completed 6 months till now. Here i m responsible for creating a UI page , mainting or modifiying a layout for ongoing Projects and using Git as a version control to generate a PR for code integration.
              </div>
              
            </v-container>
            
          </v-card>
          
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style>

@media only screen and (max-width: 480px){
  .about-Img{
    width: 100%;
    height: 280px;
  }
}


</style>