<template>
  <div>
    <v-child>
      <table>
        <tr is="v-child"></tr>
      </table>
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
