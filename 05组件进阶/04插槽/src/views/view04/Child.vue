<template>
  <div>
    <ul>
      <slot name="list" v-for="item of arr" :item="item"></slot>
    </ul>
  </div>
</template> <script>
export default {
  data() {
    return {
      arr: [
        "web 大前端",
        "UI 设计",
        "互联网营销",
        "JAVA 开发",
        "Python 开发",
        "大数据",
        "云计算",
        "Unity",
        "软件测试",
      ],
    };
  },
};
</script>