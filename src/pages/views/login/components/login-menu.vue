<template>
  <div class="login-content">
    <menu-list :menu-name-list="menuNameList" ref="menuList"></menu-list>
    <van-divider />
    <menu-list :menu-name-list="menuNameSetting" ref="menuList"></menu-list>
  </div>
</template>
<script>
import { Divider } from "vant";
import menuList from "@/pages/views/login/components/menu-list";
export default {
  components: {
    [Divider.name]: Divider,
    menuList
  },
  data() {
    return {
      menuNameList: [
        { name: "演出", icon: "#iconsousuo", url: "" },
        { name: "商城", icon: "#iconsousuo" },
        { name: "附近的人", icon: "#iconsousuo" },
        { name: "口袋铃声", icon: "#iconsousuo" },
        { name: "我的订单", icon: "#iconsousuo" }
      ],
      menuNameSetting: [
        { name: "定时停止播放", icon: "#iconsousuo", url: "" },
        { name: "扫一扫", icon: "#iconsousuo" },
        { name: "音乐闹钟", icon: "#iconsousuo" },
        { name: "在线听歌免流量", icon: "#iconsousuo" },
        { name: "游戏推荐", icon: "#iconsousuo" },
        { name: "优惠券", icon: "#iconsousuo" },
        { name: "我要直播", icon: "#iconsousuo" }
      ]
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
