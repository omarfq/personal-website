import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import Contact from './components/Contact.vue';
import Landing from './components/Landing.vue';
import './plugins/vuetify';
import "./stylus/main.styl";

Vue.use(VueRouter);

const routes = [
  { path: '/contact', component: Contact },
  { path: '/', component: Landing }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
