<template>
  <div>
    <div>
      <h2 ref="myh2">学 IT，就选中公优就业</h2>
      <button @click="getContent">获取内容</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getContent() {
      console.log(this.$refs.myh2.innerHTML);
    },
  },
};
</script>
