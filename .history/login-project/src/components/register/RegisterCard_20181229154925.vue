<template>
  <div>
    <Card>
      <div>
        <Button>返回</Button>
      </div>
      <div class="reg-row">
        <label>账号:</label>
        <Input placeholder="Please Enter Name" v-model="account">
          <Icon type="md-person" slot="prefix"/>
        </Input>
      </div>
      <div class="reg-row">
        <label>密码:</label>
        <Input placeholder="Please Enter PassWord" :type="pwdType" v-model="password">
          <Icon :type="pwdIcon" slot="prefix" @click="showPwd"/>
        </Input>
      </div>
      <div>
        <Button>注册</Button>
        <Button>重置</Button>
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
  computed: {
    pwdIcon() {
      return this.pwdType === "password" ? "md-eye-off" : "md-eye";
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
.reg-row
  margin-top: 20px
</style>
