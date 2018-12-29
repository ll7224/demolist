<template>
  <div>
    <Card>
      <div>
        <Button @click="backLogin">返回</Button>
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
      <div class="reg-btn">
        <Button type="primary">注册</Button>
        <Button type="error" class="replaceBtn">重置</Button>
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
    backLogin() {
      this.$router.push({ path: "/" })
    },
    created() {
      localStorage.setItem("account","123"),
      localStorage.setItem("password","123")
    },
  },
};
</script>
<style lang="stylus" scoped>
.reg-row
  margin-top: 20px;
.reg-btn
  margin 20px 100px;
  .replaceBtn
    margin-left: 20px
</style>
