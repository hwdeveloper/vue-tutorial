<template>
  <div>
    <h2>父组件给的礼物--{{ gift }}</h2>
  </div>
</template> 
<script>
export default {
  // 子组件通过 props 来接收父组件传递的数据
  props: ["gift"],
};
</script>