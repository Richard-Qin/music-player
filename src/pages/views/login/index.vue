<template>
  <div class="login">
    <login-top></login-top>
    <login-content></login-content>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import loginTop from "./components/login-top";
import loginContent from "./components/login-content";
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    loginTop,
    loginContent
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="scss"></style>
