<template>
  <div>
    <Card>
      <div>
        <Button @click="backLogin">返回</Button>
      </div>
      <div class="reg-row">
        <label>账号:</label><br/>
        <Input placeholder="Please Enter Name" v-model="account" class="inputStyle" @on-blur="checkAccount">
          <Icon type="md-person" slot="prefix"/>
        </Input>
        <normal-tips :tips="tips"></normal-tips>
      </div>
      <div class="reg-row">
        <label>密码:</label><br/>
        <Input placeholder="Please Enter PassWord" :type="pwdType" v-model="password" class="inputStyle">
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
import normalTips from "../normalTips";
import { TIPS } from "@/utils/constants";
export default {
  data() {
    return {
      pwdType: "password",
      account: "",
      password: "",
      tips: null
    }
  },
  components: {
    normalTips
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
    checkAccount() {
      let lastAccount = localStorage.getItem("account");
      if(this.account === '') {
        this.$Message.info("请输入账号")
        this.tips = "md-close-circle"
      }else if(this.account === lastAccount) {
        this.$Message.info("账号相同")
        this.tips = "md-close-circle"
      }else {
        this.tips = "md-checkmark-circle"
      }
    }
  },
  created() {
    localStorage.setItem("account","123"),
    localStorage.setItem("password","123")
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
.inputStyle
  width:90%
</style>
