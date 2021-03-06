import Vue from 'vue';
import VueRouter from 'vue-router';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';
import LittleCleaning from '../views/LittleCleaning.vue';

import StockManagement from '../views/StockManagement.vue';
import StockManagementDetail from '../views/StockManagementDetail.vue';
import store from "../store/index";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/little_cleaning',
    name: 'LittleCleaning',
    component: LittleCleaning,
  },


  {
    path: '/stock_management',
    name: 'StockManagement',
    component: StockManagement,
  },
  {
    path: '/stock_management/detail/:stock_id',
    name: 'StockManagemntDetail',
    component: StockManagementDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state.auth
  ) {
    next({
      path: "/",
      query: {
        redirect: to.fullPath,
      },
    });
  } else {
    next();
  }
});

export default router;
