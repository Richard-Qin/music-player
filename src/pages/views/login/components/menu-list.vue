<template>
  <div class="common-menu">
    <div :key="index" v-for="(item, index) in menuNameList">
      <div class="list">
        <svg aria-hidden="true" class="icon icon-svg">
          <use :xlink:href="item.icon" />
        </svg>
        <span class="menu-name" @click="pushRouter(item.url)">{{
          item.name
        }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    menuNameList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    pushRouter(val) {
      this.$router.push({ name: val });
    }
  }
};
</script>
<style lang="scss">
.common-menu {
  .list:first-child {
    padding-top: 1.2rem;
  }
  .list {
    padding: 0.4rem 1rem;
    display: flex;
    align-items: center;
    .icon-svg {
      font-size: 1.6rem;
      margin-right: 0.6rem;
    }
  }
}
</style>
