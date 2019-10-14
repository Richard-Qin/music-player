<template>
  <div class="login">
    <login-top></login-top>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant'
import loginTop from './components/login-top'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    loginTop
  },
  data() {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss">

</style>
