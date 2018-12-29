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
        <Input placeholder="Please Enter PassWord" type="password">
          <Icon type="md-eye-on" slot="prefix"/>
        </Input>
      </div> 
    </Card>
  </div>
</template>
<script>
export default {};
</script>
