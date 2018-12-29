<template>
  <div>
    <Card>
      <div>
        <label>账号:</label>
        <Input placeholder="Please Enter Name">
          <Icon type="md-person" slot="prefix"/>
        </Input>
      </div>
      <div>
        <label>密码:</label>
        <Input placeholder="Please Enter PassWord" :type="pwdType" on-click="showPwd">
          <Icon :type="pwdIcon" slot="prefix"/>
        </Input>
      </div> 
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwdType: "password"
    }
  },
  computed: {
    pwdIcon() {
       return this.pwdType === "password" ? "md-eye-off" : "md-eye"
    }
  },
  methods: {
    showPwd() {
      console.log(1231231)
      if(this.pwdType === "password") {
        this.pwdType = "text"
      }else {
        this.pwdType = "password"
      }
    }
  }
};
</script>
