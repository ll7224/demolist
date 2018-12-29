<template>
  <div class="check-wrapper">
     <label>验证码:</label>
     <Input type="text" placeholder="Please Enter Verification Code" class="input-type" @on-blur="checkCode" v-model="inputCode"></Input>
     <Button class="input-type" @click="generateCode">{{verification}}</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      verification: "",
      inputCode: ""
    };
  },
  methods: {
    generateCode() {
      let code = "";
      let codeLength = 4;
      let random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      );
      for (let i = 0; i < codeLength; i++) {
        let index = Math.floor(Math.random() * 36);
        code += random[index];
      }
      this.verification = code;
    },
    checkCode() {
      this.inputCode.toUpperCase();
      if (this.inputCode === "") {
        // alert("请输入验证码");
      } else if (this.inputCode.toUpperCase() != this.inputCode) {
        alert("验证码有误");
        this.generateCode();
        this.inputCode = "";
      } else {
        alert("验证码正确");
      }
    }
  },
  created() {
    this.generateCode();
  }
};
</script>
<style lang="stylus" scoped>
.check-wrapper
  width: 100%
  margin-top: 20px
  .input-type
    width: 38.8%
    margin-left: 14px
</style>
