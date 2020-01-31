<template>
  <div class="menu">
    <div>
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>每日推荐</span>
    </div>
    <div>
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>歌单</span>
    </div>
    <div>
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>排行榜</span>
    </div>
    <div>
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>电台</span>
    </div>
    <div>
      <svg aria-hidden="true" class="icon iconsousuo">
        <use xlink:href="#iconsousuo" />
      </svg>
      <span>私人FM</span>
    </div>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.menu {
  display: grid;
}
</style>
