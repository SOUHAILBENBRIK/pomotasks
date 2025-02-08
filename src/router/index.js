import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../pages/Home.vue';
import SignupView from '../pages/Signup.vue';


const routes = [
    { path: '/', component: HomeView , name: 'home'},
    { path: '/signup', component: SignupView , name: 'signup'},
  ];


  const  router = createRouter({
    history: createMemoryHistory(),
    routes,
  })


  export default router;