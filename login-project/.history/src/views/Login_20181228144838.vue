<template>
  <div class="login-wrapper">
    <Row class="login-container">
      <Col span="24">
        <Card></Card>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
<style lang="stylus" scoped>
.login-wrapper
  min-height: 950px;
  background-color: #eee;
.login-container
  position: absolute;
  width: 25%;
  top: 30%;
  left: 37.5%
</style>
