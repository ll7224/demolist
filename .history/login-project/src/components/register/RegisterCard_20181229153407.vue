<template>
  <div>
    <Card>
      <div>
        <Button>返回</Button>
      </div>
      <div>
        <label>账号:</label>
        <Input placeholder="Please Enter Name" v-model="account">
          <Icon type="md-person" slot="prefix"/>
        </Input>
      </div>
    </Card>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>

</style>
