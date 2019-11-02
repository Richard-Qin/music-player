<template>
  <div>
    <!-- 轮播图 -->
    <swipe-list></swipe-list>
  </div>
</template>
<script>
// import navBar from "@/components/common/nav-bar";
import { Button, Field, Swipe, SwipeItem } from 'vant'
import SwipeList from './components/swipe-list'
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    SwipeList
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
