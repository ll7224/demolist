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
        <Input placeholder="Please Enter PassWord" :type=pwdType>
          <Icon type="md-eye-off" slot="prefix"/>
        </Input>
      </div> 
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pwdIcon: "md-eye",
      pwdType: "password"
    }
  },
  computed: {
    showPwd() {

    }
  }
};
</script>
