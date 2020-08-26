<template>
  <div>
    <h1>这是父组件--{{ car }}</h1>
    <!-- 使用子组件时，通过自定义属性来进行传值 -->
    <v-child :gift="car"></v-child>
  </div>
</template>
<script>
import vChild from "./Child";
export default {
  components: {
    vChild,
  },
  data() {
    return {
      car: "劳斯莱斯",
    };
  },
};
</script>
