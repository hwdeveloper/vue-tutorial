<template>
  <div id="app">
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
  display: flex;
  flex-direction: column;
  width: 99%;
  height: 98%;
  position: absolute;
  align-items: center;
}
</style>
