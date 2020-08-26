<template>
  <div id="box">
    <router-view />
    <div id="menu">
      <div class="button">
        <router-link active-class="active" to="/">首页</router-link>
      </div>
      <div class="button">
        <router-link active-class="active" to="/user">用户</router-link>
      </div>
      <div class="button">
        <router-link active-class="active" to="/product">产品</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "home页面",
    };
  },
};
</script>
<style>
#box {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
#menu {
  display: flex;
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5%;
}

.button {
  width: 200px;
  height: 80px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px #2e1f1f solid;
  background: #cad0d6;
}
</style>