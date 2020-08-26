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
      title: "产品页面",
      id: this.$route.query.id != null ? this.$route.query.id : 0,
    };
  },
  created: function () {
    console.log(this.$route.query);
  },
};
</script>
