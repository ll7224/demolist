<template>
  <div class="tips">
    <Icon :type="tips" :class="iconStyle"/>
  </div>
</template>
<script>
import { TIPS } from "@/utils/constants";

export default {
  props: {
    tips: {
      type: String
    }
  },
  computed: {
    iconStyle() {
      return this.tips === TIPS.CHECKED ? "icon-check" : "icon-close";
    }
  }
};
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
