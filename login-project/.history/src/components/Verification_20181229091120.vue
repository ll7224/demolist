<template>
  <div class="check-wrapper">
     <label>验证码:</label>
     <Input type="text" placeholder="Please Enter Verification Code" class="input-type"></Input>
     <Input type="button" v-model="verification" class="input-type"/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
.check-wrapper
  width: 100%
  margin-top: 10%
  .input-type
    width: 40%
    padding-left: 10px
</style>
