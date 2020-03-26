<template>
  <div class="swipe-list">
    <van-swipe :autoplay="3000">
      <van-swipe-item :key="index" v-for="(item, index) in banners">
        <img :src="item.pic" class="imgs" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { Button, Field, Swipe, SwipeItem, Lazyload } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload
  },
  data() {
    return {
      value: "",
      banners: []
    };
  },
  computed: {},
  mounted() {
    this.getBanner();
  },
  methods: {
    async getBanner() {
      let params = {
        type: 1
      };
      let res = await this.$api.getBanner(params);
      if (res) {
        this.banners = res.banners;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.swipe-list {
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
</style>
