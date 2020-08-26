<template>
  <div id="app">
    <StudyView />
  </div>
</template>

<script>
import StudyView from "./views/view02/Father";

export default {
  name: "App",
  components: {
    StudyView,
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
