<template>
  <div class="recommend-list">
    <div class="title">
      <span>推荐歌单</span>
      <span>歌单广场</span>
    </div>
    <div class="recommend">
      <div :key="index" v-for="(item, index) in playlists">
        <img :src="item.coverImgUrl" alt @click="recommendDetail(item.id)" />
        <!-- <div>
          <span>{{ item.playCount | playCountFilter }}</span>
          <svg aria-hidden="true" class="icon">
            <use xlink:href="iconbofangsanjiaoxing" />
          </svg>
        </div> -->
      </div>
    </div>
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
      playlists: [],
      screenWidth: null
    };
  },
  computed: {},
  mounted() {
    this.getPlayList();
  },
  methods: {
    async getPlayList() {
      let params = {
        limit: 6,
        order: "hot"
      };
      let res = await this.$api.getPlayList(params);
      if (res) {
        this.playlists = res.playlists;
      }
    },
    recommendDetail(val) {
      this.$store.commit("music/commonId", val);
      this.$router.push({ name: "RecommendDetail" });
    }
  }
};
</script>
<style lang="scss" scoped>
.recommend-list {
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
