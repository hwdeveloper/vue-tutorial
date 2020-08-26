<template>
  <div id="app">
    <StudyView />
  </div>
</template>

<script>
//import StudyView from "./views/study01";
//import StudyView from "./views/study02";
import StudyView from "./views/study03father";

export default {
  name: "App",
  components: {
    StudyView,
  },
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
