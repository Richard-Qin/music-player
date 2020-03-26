<template>
  <div class="recommend-detail">
    <div class="title">
      <span>推荐歌单</span>
      <span>歌单广场</span>
    </div>
    <div class="recommend"></div>
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
      privileges: []
    };
  },
  computed: {
    commonId() {
      return this.$store.getters["music/commonId"];
    }
  },
  mounted() {
    this.getRecommendDetail();
  },
  methods: {
    async getRecommendDetail() {
      let params = {
        id: this.commonId,
        s: null
      };
      let res = await this.$api.getRecommendDetail(params);
      if (res) {
        this.privileges = res.privileges;
        // console.log(111);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.recommend-detail {
  padding: 0 4vw;
  .title {
    padding: 6vw 0;
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
      font-size: 32px;
      font-weight: bold;
    }
    span:nth-child(2) {
      width: 130px;
      text-align: center;
      font-size: 26px;
      border: 1px #ccc solid;
      border-radius: 50px;
      padding: 0 4px;
    }
  }
  .recommend {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
      width: 28vw;
      height: 28vw;
      margin-bottom: 4vw;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}
</style>
