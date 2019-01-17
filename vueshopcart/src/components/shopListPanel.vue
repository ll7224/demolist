<template>
  <div>
    {{shopList}}
  </div>
</template>
<script>
export default {
  props: {
    shopList: {
      type: Array,
      default: []
    }
  }
};
</script>
<style lang="stylus" scoped>

</style>
