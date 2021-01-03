<template>
  <!-- Preloader -->
  <div id="page-loading-blocs-notifaction" class="page-preloader"></div>
  <!-- Preloader END -->
  <div class="page-container">
    <Nav/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer/Footer.vue'
import Nav from "./components/Nav/Nav";
// import Parse from 'parse'
// import * as Env from './environment'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      firstName: 'Vantol',
      lastName: 'Bennett',
      userName: 'vvantol2000',
      email: 'test@test.com',
      password: 'abc123',
      teamMembers: []

    }
  },
  methods: {
    // async read() {
      // const teamMembers = Parse.Object.extend("Team")
      // const query = new Parse.Query(teamMembers)
      // const team = await query.get("").then(response => {
      //   return response.data
      // })
      // const teams = await axios('https://parseapi.back4app.com/classes/Team',{
      //   headers: {
      //     'X-Parse-Application-Id': Env.APPLICATION_ID,
      //     'X-Parse-REST-API-Key': Env.REST_API
      //   }
      // })
      // const response = await teams.data.results
      // this.teamMembers.push(response)
    //}
  },
  created() {
    // const user = new Parse.User();
    // user.save({
    //   username: this.userName,
    //   email: this.email,
    //   password: this.password
    // }).then(response => {
    //   alert('New user object created with success! ObjectId: ' + response.id + ', ' + user.get('username'))
    // }).catch(err => {
    //   alert('Error: ' + err.message)
    // })
    // this.read()
  }
}
</script>

<style>

</style>
