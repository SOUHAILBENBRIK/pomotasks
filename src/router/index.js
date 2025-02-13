import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue';
import SignupView from '../pages/Signup.vue';
import SignInView from '../pages/SignIn.vue';
import ProfileView from '../pages/Profile.vue';
import HelpView from '../pages/Help.vue';
import VueCookies from 'vue-cookies';

const routes = [
    
    { 
      path: '/',
      component: HomeView ,
      name: 'home',
      meta: { requiresAuth: true }},
    { 
       path: '/signup',
       component: SignupView ,
       name: 'signup'},
    {
      path : '/login',
      component : SignInView,
      name : 'login'
    }, 
    {
      path : '/profile',
      component : ProfileView,
      name : 'profile',
      meta: { requiresAuth: true }
    },
    {
      path : '/help',
      component : HelpView,
      name : 'help'
    }

  ];


  const  router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : routes,
  })

  router.beforeEach((to, from, next) => {
    const token = VueCookies.get('token'); 
  
    if (to.meta.requiresAuth && !token) {
      next('/login');
    } else {
      next();
    }
  });


  export default router;