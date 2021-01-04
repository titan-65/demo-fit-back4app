import './assets/css/all.min.css';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.min.css';
import './assets/style.css';

import App from './App.vue';
import Home from './components/HelloWorld.vue';
import Teams from './components/Teams.vue';
import Workout from './components/WorkOut.vue';
import NotFound from './components/NotFound.vue';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Parse from 'parse';

// import * as ENV from './environment';

require('dotenv').config();

// Parse.initialize(ENV.APPLICATION_ID, ENV.JAVASCRIPT_KEY);
// Parse.serverURL = ENV.SERVER_URL;

Parse.initialize(process.env.APPLICATION_ID, process.env.JAVASCRIPT_KEY);
Parse.serverUrl = process.env.SERVER_URL;

const routes = [
	{ path: '/', component: Home },
	{ path: '/teams', component: Teams },
	{ path: '/workout', component: Workout },
	{ path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound },
];
const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

const app = createApp(App);
app.use(Parse);
app.use(router);
app.mount('#app');
