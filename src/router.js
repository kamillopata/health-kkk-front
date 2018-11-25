import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () => import('./views/Agenda.vue'),
    },
    {
      path: '/profile/:profileId',
      name: 'profile',
      props: true,
      component: () => import('./views/Profile.vue'),
      children: [
        {
          path: ':scope',
          name: 'profile-specific',
          props: true,
          component: () => import('./views/Profile.vue'),
        },
      ],
    },
  ],
});
