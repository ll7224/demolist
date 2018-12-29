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
    }
  },
  computed: {
    pwdIcon() {
       return this.pwdType === "password" ? "md-eye-off" : "md-eye"
    }
  },
  components: {
    Verification
  },
  methods: {
    showPwd() {
      if(this.pwdType === "password") {
        this.pwdType = "text"
      }else {
        this.pwdType = "password"
      }
    }
  }
};
</script>
