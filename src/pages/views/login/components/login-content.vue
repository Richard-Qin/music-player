<template>
  <div class="login-content">
    <van-tabbar :fixed="false" class="titel" v-model="active">
      <van-tabbar-item icon="envelop-o">我的消息</van-tabbar-item>
      <van-tabbar-item icon="contact">我的好友</van-tabbar-item>
      <van-tabbar-item icon="flower-o">个性皮肤</van-tabbar-item>
      <van-tabbar-item icon="service-o">听歌识曲</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss">
.nav-bar {
  $size: 34px;
  .iconsousuo,
  .icongengduo {
    font-size: $size;
  }
}
</style>
