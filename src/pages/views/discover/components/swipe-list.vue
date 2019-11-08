<template>
  <div>
    <van-swipe :autoplay="3000">
      <van-swipe-item :key="index" v-for="(image, index) in imageList">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
// import navBar from "@/components/common/nav-bar";
import { Button, Field, Swipe, SwipeItem, Lazyload } from 'vant'
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload
  },
  data() {
    return {
      value: '',
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  computed: {},
  mounted() {
    this.getTopHotMusic()
  },
  methods: {

  }
}
</script>
