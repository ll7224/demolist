<template>
  <div class="tips">
    <Icon :type="tips" :class="iconStyle"/>
    <span>asdas</span>
  </div>
</template>
<script>
export default {
  props: {
    tips: {
      type: String
    }
  },
  computed: {
    iconStyle() {
      return this.tips === "md-checkmark-circle" ? "icon-check" : "icon-close"
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
