<template>
  <div class="check-wrapper">
     <label>验证码:</label>
     <Input type="text" placeholder="Please Enter Verification Code" class="input-type"></Input>
     <Input type="button" v-model="verification"/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.check-wrapper
  width: 100%
  .input-type
    width: 50%
</style>
