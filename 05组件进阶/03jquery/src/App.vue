<template>
  <div id="app">
    <div id="box"></div>
    <button @click="toggle">开始</button>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$("#box").slideUp(1000);
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
}
#box {
  width: 400px;
  height: 500px;
  background: #334455;
}
</style>
