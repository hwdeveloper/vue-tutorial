<template>
  <div>
    <h1>这是父组件--{{ car }}</h1>
    <h2>这是子组件反馈的礼物---{{ childGift }}</h2>
    <!-- 使用子组件时，通过自定义属性来进行传值 -->
    <!-- 使用子组件时，通过自定义事件来进行函数的传递 -->
    <v-child :gift="car" money="1000000" @giveToParent="changeGift($event)"></v-child>
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
      childGift: "",
    };
  },
  methods: {
    changeGift(e) {
      console.log("父组件的函数被子组件触发。。。。", e);
      this.childGift = e;
    },
  },
};
</script>
