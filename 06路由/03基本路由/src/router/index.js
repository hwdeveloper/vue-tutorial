import Vue from "vue"; //引入路由插件
import Router from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Product from "../views/Product.vue";
Vue.use(Router);
export default new Router({
  //定义路由规则
  routes: [
    { path: "/", component: Home },
    { path: "/user", component: User },
    { path: "/product", component: Product },
  ],
});
