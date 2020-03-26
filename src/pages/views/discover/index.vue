<template>
  <div>
    <!-- 轮播图 -->
    <swipe-list></swipe-list>
    <!-- 菜单 -->
    <find-menu></find-menu>
    <recommend-music></recommend-music>
  </div>
</template>
<script>
import { Button, Field, Swipe, SwipeItem } from "vant";
import FindMenu from "./components/find-menu";
import SwipeList from "./components/swipe-list";
import RecommendMusic from "./components/recommend-music";
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    SwipeList,
    FindMenu,
    RecommendMusic
  },
  data() {
    return {
      value: ""
    };
  },
  computed: {},
  mounted() {
    console.log([] == ![]);
  },
  methods: {}
};
</script>
