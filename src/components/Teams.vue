<template>

  <!-- bloc-6 -->
  <div class="bloc l-bloc" id="bloc-6">
    <div class="container bloc-lg">
      <div class="row">
        <div class="col-12 col-11 col-lg-8 offset-lg-2">
          <h3 class="mg-md text-center ">
            <i>‘The last three or four reps is what makes the muscle grow.
              This area of pain divides a champion from someone who is not a champion.'</i><br>
          </h3>
          <h4 class="mg-md text-center ">
            <strong>Arnold Schwarzenegger</strong><br>
          </h4>
        </div>
      </div>
    </div>
  </div>
  <!-- bloc-6 END -->

  <!-- bloc-7 -->
  <div class="bloc l-bloc" id="bloc-7">
    <div class="container bloc-lg">
      <div class="row">
        <div class="col">
          <h3 class="mg-md text-center">
            Meet Our Team<br>
          </h3>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
          </p>
        </div>
      </div>
      <div class="row voffset">
        <div class="col-lg-3 col-md-6" v-for="team in teamMembers" :key="team.id">
          <img :src="team.image.url" data-src="img/placeholder-user.png" class="img-fluid mx-auto d-block" alt="placeholder user" />
          <h3 class="mg-md text-center">
            {{team.Name}}
          </h3>
          <p class="text-center">
            {{team.jobTitle}}
          </p>
        </div>

      </div>
    </div>
  </div>
  <!-- bloc-7 END -->

  <!-- bloc-8 -->
  <div class="bloc l-bloc " id="bloc-8">
    <div class="container bloc-lg">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
          <div class="card">
            <img src="img/lazyload-ph.png" data-src="img/placeholder-user.png" class="img-fluid mx-auto d-block" alt="placeholder user" />
            <div class="card-body">
              <h3 class="mg-md text-center">
                John Doe
              </h3>
              <h5 class="mg-md text-center">
                Job description
              </h5>
              <div class="row">
                <div class="col-6 col-sm-2 offset-sm-2 col">
                  <div class="text-center">
                    <a href="#"><span class="fa fa-facebook-official icon-md"></span></a>
                  </div>
                </div>
                <div class="col-6 col-sm-2">
                  <div class="text-center">
                    <a href="#"><span class="fa fa-twitter icon-md"></span></a>
                  </div>
                </div>
                <div class="col-6 col-sm-2">
                  <div class="text-center">
                    <a href="#"><span class="fa fa-instagram icon-md"></span></a>
                  </div>
                </div>
                <div class="col-6 col-sm-2">
                  <div class="text-center">
                    <a href="#"><span class="fa fa-envelope-o icon-md"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bloc-8 END -->
</template>

<script>
// import * as Env from '../environment'
import axios from 'axios'

export default {
  name: "Teams",
  data() {
    return {
      teamMembers: null
    }
  },
  methods: {
    async read() {
      // const teamMembers = Parse.Object.extend("Team")
      // const query = new Parse.Query(teamMembers)
      // const team = await query.get("").then(response => {
      //   return response.data
      // })
      const teams = await axios('https://parseapi.back4app.com/classes/Team',{
        headers: {
          // 'X-Parse-Application-Id': Env.APPLICATION_ID,
          // 'X-Parse-REST-API-Key': Env.REST_API
        }
      })
      const response = await teams.data.results
      // this.teamMembers.push(response)
      this.teamMembers = response
      console.log(this.teamMembers)
    }
  },
  created() {
    this.read()
  }
}
</script>

<style scoped>

</style>
