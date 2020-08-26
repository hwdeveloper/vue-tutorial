import Vue from "vue"; //引入路由插件
import Router from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Product from "../views/Product.vue";
import R404 from "../views/R404.vue";
Vue.use(Router);
export default new Router({
  //定义路由规则
  routes: [
    { path: "/", component: Home },
    { path: "/user/:id", component: User },
    { path: "/product/:id", component: Product },
    { path: "*", component: R404 },
  ],
});
