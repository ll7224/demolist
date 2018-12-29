<template>
  <div>
    <Card>
      <div>
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
      <Verification></Verification>
      <div class="btn-wrapper">
        <Button type="primary" @click="login">登录</Button>
        <Button class="resBtn">注册</Button>
      </div>
      <div>
        <router-link to=""></router-link>
      </div>
    </Card>
  </div>
</template>
<script>
import Verification from "@/components/Verification";
export default {
  data() {
    return {
      pwdType: "password",
      account: "",
      password: ""
    };
  },
  computed: {
    pwdIcon() {
      return this.pwdType === "password" ? "md-eye-off" : "md-eye";
    }
  },
  components: {
    Verification
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "text";
      } else {
        this.pwdType = "password";
      }
    },
    login() {

    }
  }
};
</script>
<style lang="stylus" scoped>
.btn-wrapper
  margin: 20px 100px;
  .resBtn
    margin-left: 20px
</style>

