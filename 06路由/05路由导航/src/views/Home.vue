<template>
  <div>
    <div id="box">
      <button @click="click1">1,push</button>
      <button @click="click2">2,对象</button>
      <button @click="click3">3,带查询参数</button>
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
    click1() {
      //this.$router.push("user");
      this.$router.replace("user");
    },
    click2() {
      //this.$router.push({ path: "product" });
      this.$router.replace({ path: "product" });
    },
    click3() {
      //this.$router.push({ path: "user", query: { name: "小刚" } });
      this.$router.replace({ path: "user", query: { name: "小刚" } });
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