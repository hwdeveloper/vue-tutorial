<template>
  <div>
    <div>
      <div>
        <ul>
          <li v-for="(item, index) of arr" :key="index" ref="list">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
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
  mounted() {
    console.log(this.$refs.list);
  },
};
</script>
