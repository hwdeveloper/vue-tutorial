<template>
  <div>
    <v-child>
      <!-- 作用域插槽 -->
      <template v-slot:list="props">
        <li>{{ props.item }}</li>
      </template>
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
