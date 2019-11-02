<template>
  <div class="nav-bar">
    <van-tabbar :fixed="false" class v-model="active">
      <van-tabbar-item @click="isLogin = true">
        <svg aria-hidden="true" class="icon icongengduo">
          <use xlink:href="#icongengduo" />
        </svg>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link to="/home">我的</router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link to="/find">发现</router-link>
      </van-tabbar-item>
      <van-tabbar-item>视频</van-tabbar-item>
      <van-tabbar-item>
        <svg aria-hidden="true" class="icon iconsousuo">
          <use xlink:href="#iconsousuo" />
        </svg>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 登录 -->
    <van-popup
      :style="{ width: '80%', height: '100%' }"
      position="left"
      v-model="isLogin"
    >
      <login></login>
    </van-popup>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Popup } from "vant";
import Login from "@/pages/views/login/index";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Popup.name]: Popup,
    Login
  },
  data() {
    return {
      active: 0,
      isLogin: false
    };
  },
  methods: {}
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
