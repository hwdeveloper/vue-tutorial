<template>
  <div id="app">
    <!-- 内置路由导航 -->
    <router-link to="/">首页</router-link>
    <router-link to="/product">产品页面</router-link>
    <router-link to="/user">用户页面</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
