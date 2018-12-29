<template>
  <div class="login-wrapper">
    <Row class="login-container">
      <Col span="24">
        <LoginCard></LoginCard>
      </Col>
    </Row>
  </div>
</template>

<script>
import LoginCard from "@/components/LoginCard";
export default {
  name: "home",
  components: {
    LoginCard
  }
};
</script>
<style lang="stylus" scoped>
.login-wrapper
  min-height: 980px;
  background-color: #eee;
.login-container
  position: absolute;
  top: 30%
</style>
