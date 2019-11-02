<template>
  <div class="nav-bar"></div>
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
