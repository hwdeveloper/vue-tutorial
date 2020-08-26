<template>
  <div>
    <button @click="changeView">切换组件</button>
    <div :is="tagname"></div>
  </div>
</template>
<script>
import vStudent from "./Student";
import vTeacher from "./Teacher";
export default {
  components: { vStudent, vTeacher },
  data() {
    return { tagname: "v-student" };
  },
  methods: {
    changeView() {
      if (this.tagname == "v-student") {
        this.tagname = "v-teacher";
      } else {
        this.tagname = "v-student";
      }
    },
  },
};
</script>
