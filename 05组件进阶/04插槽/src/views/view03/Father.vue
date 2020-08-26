<template>
  <div>
    <v-child>
      <!-- 匿名插槽 -->
      <p style="color:red">我是子组件插槽内容</p>
      <!-- 具名插槽 -->
      <div slot="header">我是子组件头部内容</div>
      <div slot="footer">我是子组件底部内容</div>
    </v-child>
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
