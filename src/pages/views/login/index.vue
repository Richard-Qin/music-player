<template>
  <div class="login">
    <login-top></login-top>
    <login-content></login-content>
    <login-menu></login-menu>
    <div class="login-footed">
      <div>
        <svg aria-hidden="true" class="icon icon-svg">
          <use xlink:href="#iconsousuo" />
        </svg>
        <span>夜间模式</span>
      </div>
      <div>
        <svg aria-hidden="true" class="icon icon-svg">
          <use xlink:href="#iconsousuo" />
        </svg>
        <span>设置</span>
      </div>
      <div>
        <svg aria-hidden="true" class="icon icon-svg">
          <use xlink:href="#iconsousuo" />
        </svg>
        <span>退出</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import loginTop from "./components/login-top";
import loginContent from "./components/login-content";
import loginMenu from "./components/login-menu";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    loginTop,
    loginContent,
    loginMenu
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  .login-footed {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
  }
}
</style>
