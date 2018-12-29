<template>
  <div class="tips">
    <Icon type="md-checkmark-circle" class="icon-check" v-if="tips"/>
    <Icon type="md-close-circle" class="icon-close" v-else/>
  </div>
</template>
<script>
export default {
  props: {
    tips: {
      type: Boolean
    }
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
