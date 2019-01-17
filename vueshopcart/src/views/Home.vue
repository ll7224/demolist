<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "home",
  created() {
    axios.get('/api/shopList.json')
  },
};
</script>
