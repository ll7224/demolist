<template>
  <div class="login-wrapper">
    <Row class="login-container">
      <Col span="24">
        <registerCard></registerCard>
      </Col>
    </Row>
  </div>
</template>
<script>
import registerCard from "@/components/register/RegisterCard"
export default {
  components: {
    registerCard
  }
};
</script>
<style lang="stylus" scoped>
.login-wrapper
  min-height: 980px;
  background-color: #eee;
.login-container
  position: absolute;
  top: 30%;
  left: 40%;
  width: 20%;
</style>