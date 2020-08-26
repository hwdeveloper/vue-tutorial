<template>
  <div>
    <div id="box">
      <button @click="toUserView">1:跳转到用户页面</button>
      <button @click="toProductView">2,跳转到产品页面</button>
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
  methods: {
    toUserView() {
      this.$router.push({
        path: "/user/3",
      });
    },
    toProductView() {
      this.$router.push({ path: "/product/4" });
    },
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
}
</style>