<template>
  <div>
    12312
    <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>
<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  }
}
</script>
