<template>
  <div>
    <h2>父组件给的礼物--{{ gift }}</h2>
    <p>父亲给的生活费:{{money}}</p>
    <button @click="send()">反馈给父组件</button>
  </div>
</template> 
<script>
export default {
  props: ["gift", "money"],
  // 子组件通过 props 来接收父组件传递的数据
  methods: {
    send() {
      this.$emit("giveToParent", 200000);
      //通过$emit 来触发父组件的事件
    },
  },
};
</script>