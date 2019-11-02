<template>
  <div class="login-top">
    <!-- 没有登录状态 -->
    <div class="no-login">
      <div>登录网易云音乐</div>
      <div>手机电脑多端同步,尽享海量高品质音乐</div>
      <van-button
        @click="login"
        round
        type="default"
        size="small"
        class="login-btn"
        >立即登录</van-button
      >
    </div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, Button } from "vant";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Button.name]: Button
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    login() {
      // this.$router.push({name:'Login'})
    }
  }
};
</script>
<style lang="scss"></style>
