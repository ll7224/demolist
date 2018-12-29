<template>
  <div>
    <Card>
      <div>
        <Button>返回</Button>
      </div>
      <div class="">
        <label>账号:</label>
        <Input placeholder="Please Enter Name" v-model="account">
          <Icon type="md-person" slot="prefix"/>
        </Input>
      </div>
      <div>
        <label>密码:</label>
        <Input placeholder="Please Enter PassWord" :type="pwdType" v-model="password">
          <Icon :type="pwdIcon" slot="prefix" @click="showPwd"/>
        </Input>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwdType: "password",
      account: "",
      password: ""
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "text";
      } else {
        this.pwdType = "password";
      }
    },
  },
};
</script>
<style lang="stylus" scoped>

</style>
