<template>
  <div class="tips">
    <Icon type="md-checkmark-circle" class="icon-check"/>
    <Icon type="md-close-circle" class="icon-close"/>
  </div>
</template>
<script>
export default {
  props: {
    tips: {
      type: Boolean
    }
  },
  computed: {
  }
}
</script>
<style lang="stylus" scoped>
.tips
  float right
  line-height: 30px
.icon-check
  font-size 20px;
  color: #00EE00;
.icon-close
  font-size 20px;
  color: red;
</style>
