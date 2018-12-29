<template>
  <div class="check-wrapper">
     <label>验证码:</label>
     <Input type="text" placeholder="Please Enter Verification Code" class="input-type"></Input>
     <Input type="button" v-model="verification" class="input-type" v-model="verificationCode" />
  </div>
</template>
<script>
export default {
  data() {
    return {
   
    }
  }
}
</script>
<style lang="stylus" scoped>
.check-wrapper
  width: 100%
  margin-top: 20px
  .input-type
    width: 43%
    padding-left: 14px
</style>
