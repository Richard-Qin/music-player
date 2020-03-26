<template>
  <div class="menu">
    <div class="menu-svg">
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="menu-svg">
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>歌单</span>
    </div>
    <div class="menu-svg">
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>排行榜</span>
    </div>
    <div class="menu-svg">
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>电台</span>
    </div>
    <div class="menu-svg">
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>私人FM</span>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 1rem 0;
  .menu-svg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .iconsousuo {
      font-size: 2rem;
    }
    span {
      font-size: 28px;
    }
  }
}
</style>
