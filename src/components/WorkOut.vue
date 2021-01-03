<template>
  <!-- bloc-2 -->
  <div class="bloc l-bloc workout-stats" id="bloc-2">
    <div class="container bloc-lg">
      <div class="row">
        <div class="col-md-2">
          <h3 class="mg-md text-center">
            <strong>148K</strong>
          </h3>
          <h4 class="mg-md text-center">Product Users</h4>
        </div>
        <div class="col-md-2">
          <h3 class="mg-md text-center">
            <strong>1289</strong>
          </h3>
          <h4 class="mg-md text-center">Tweets</h4>
        </div>
        <div class="col-md-2">
          <h3 class="mg-md text-center">
            <strong>128K</strong>
          </h3>
          <h4 class="mg-md text-center">Subscribers</h4>
        </div>
        <div class="col-md-2">
          <h3 class="mg-md text-center">
            <strong>220K</strong>
          </h3>
          <h4 class="mg-md text-center">Followers</h4>
        </div>
        <div class="col-md-2">
          <h3 class="mg-md text-center">
            <strong>20K</strong>
          </h3>
          <h4 class="mg-md text-center">Likes</h4>
        </div>
        <div class="col-md-2">
          <h3 class="mg-md text-center">
            <strong>999K</strong>
          </h3>
          <h4 class="mg-md text-center">Cups of Tea</h4>
        </div>
      </div>
    </div>
  </div>
  <!-- bloc-2 END -->
  <!-- bloc-3 -->
  <div class="bloc l-bloc workout-stats" id="bloc-3">
    <div class="container bloc-lg">
      <div class="row">
        <div class="col-md-6" v-for="program in programDetail" :key="program.id">
          <div class="card">
            <div class="card-header">
              <h3 class="mg-clear">{{ program.title }}</h3>
            </div>
            <div class="card-body card-body-style">
              <p>
                {{ program.programDetails.length }} Week Challenge -
                {{ program.programDetails.average }} MIN/DAY
              </p>
              <p>
                {{ program.overview.slice(0, 250) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bloc-3 END -->
</template>

<script>
// import * as Env from '../environment'
import axios from 'axios'

export default {
  name: 'Workout',
  data() {
    return {
      programDetail: null,
    }
  },
  methods: {
    async read() {
      const programs = await axios('https://parseapi.back4app.com/classes/Workout', {
        headers: {
          // 'X-Parse-Application-Id': Env.APPLICATION_ID,
          // 'X-Parse-REST-API-Key': Env.REST_API,
        },
      })
      const response = await programs.data.results
      console.log(response)
      this.programDetail = response
    },
  },
  created() {
    this.read()
  },
}
</script>

<style scoped>
.workout-stats {
  background-color: #ffffff;
}
</style>
