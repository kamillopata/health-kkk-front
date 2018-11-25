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
      meta: { requiresAuth: false },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresAuth: false },
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: () => import('./views/Agenda.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/profile/:profileId',
      name: 'profile',
      props: true,
      component: () => import('./views/Profile.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          path: ':scope',
          name: 'profile-specific',
          props: true,
          component: () => import('./views/Profile.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
  ],
});
