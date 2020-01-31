<template>
  <div>
    <!-- 轮播图 -->
    <swipe-list></swipe-list>
    <!-- 菜单 -->
    <menu></menu>
  </div>
</template>
<script>
import { Button, Field, Swipe, SwipeItem } from 'vant'
import Menu from "./components/menu";
import SwipeList from './components/swipe-list'
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    SwipeList,
    Menu
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {},
  methods: {}
}
</script>
