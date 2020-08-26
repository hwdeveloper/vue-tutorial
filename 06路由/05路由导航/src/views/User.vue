<template>
  <div>
    <div>
      <h2>{{title}}的名字是{{name}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "用户页面",
      name: this.$route.query.name != null ? this.$route.query.name : "空",
    };
  },
  created: function () {
    console.log(this.$route.query);
  },
};
</script>
