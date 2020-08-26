<template>
  <div>
    <v-child ref="child"></v-child>
    <button @click="getChild">获取子组件</button>
  </div>
</template>
<script>
import vChild from "./study03child";
export default {
  components: {
    vChild,
  },
  methods: {
    getChild() {
      console.log(this.$refs.child);
      this.$refs.child.msg = "父消息";
    },
  },
};
</script>
