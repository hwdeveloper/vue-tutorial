<template>
  <div>
    <v-child> <p style="color:red">我是父组件插槽内容</p> </v-child>
  </div>
</template>
<script>
import vChild from "./Child";
export default {
  components: {
    vChild,
  },
};
</script>
