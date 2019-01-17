<template>
  <div class="shop-wrapper">
    <Menu mode="horizontal">
      <MenuItem to="/shopList/AllShopCart" name="allShop">全部商品</MenuItem>
    </Menu>
    <routerView/>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.shop-wrapper
  width 80%
  margin: 0 auto
</style>
