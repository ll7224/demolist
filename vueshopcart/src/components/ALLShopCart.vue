<template>
  <div class="shop-content">
     <Row class="shop-head">
       <Col span="3">
         <Checkbox>全选</Checkbox>
       </Col>  
       <Col span="8">
         <span>商品信息</span>
       </Col>  
       <Col span="3">单价</Col>  
       <Col span="3">数量</Col>  
       <Col span="5">金额</Col>  
       <Col span="2">操作</Col>  
     </Row>
     <ShopListPanel
       :shopList="shopAllList"
     />
  </div>
</template>
<script>
import { getAllShopList } from "@/services/getAllShopList.service";
import ShopListPanel from "@/components/shopListPanel";
export default {
  name: "AllShopCart",
  data() {
    return {
      shopAllList: []
    }
  },
  components: {
    ShopListPanel
  },
  created() {
    getAllShopList().then((res) => {
      this.shopAllList = res.data.data.shopAllList;
      console.log(this.shopAllList);
    })
  },
};
</script>
<style lang="stylus" scoped>
 .shop-head
   margin-top: 20px
</style>
