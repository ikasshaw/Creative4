import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView';
import AboutView from '../views/AboutView';
import ContactView from '../views/ContactView';
import Admin from '../views/Admin';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
