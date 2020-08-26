<template>
  <div>
    <div>
      <h2>{{title}}的ID是{{id}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "用户页面",
      id: this.$route.params.id != null ? this.$route.params.id : 0,
    };
  },
  created: function () {
    console.log(this.$route.params);
  },
};
</script>
