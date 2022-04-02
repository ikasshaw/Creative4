import Vue from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import projectsData from '@/projectsData';

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

let data = {
  projects: projectsData,
};

new Vue({
  router,
  data,
  render: h => h(App),
}).$mount('#app');
