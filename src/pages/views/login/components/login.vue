<template>
  <div class="login">
    <!-- 手机号登录第一步 -->
    <div class="first" v-if="isClickPhone === 1">
      <van-button @click="firstPhone" class="btn" round>手机号登录</van-button>
    </div>
    <!-- 手机号登录第二步 -->
    <div class="second" v-if="isClickPhone === 2">
      <div class="title">手机号登录</div>
      <div class="hint">未注册手机号登录后将自动创建账号</div>
      <van-field
        label="+86"
        label-width="40px"
        placeholder="请输入手机号"
        type="number"
        v-model="phone"
      ></van-field>
      <van-button @click="secondPhone" class="btn" round>下一步</van-button>
    </div>
    <!-- 手机号登录第三步 -->
    <div class="three">
      <div>验证码已发送至</div>
      <div>{{ phone }}</div>
      <van-field
        placeholder="请输入手机号"
        type="number"
        v-model="captcha"
      ></van-field>
      <van-button @click="finishLogin">完成</van-button>
    </div>
  </div>
</template>
<script>
import { Field, NumberKeyboard, Button } from "vant";
export default {
  components: {
    [Field.name]: Field,
    [NumberKeyboard.name]: NumberKeyboard,
    [Button.name]: Button
  },
  data() {
    return {
      isClickPhone: 1,
      phone: null,
      captcha: null
    };
  },
  mounted() {},
  methods: {
    firstPhone() {
      this.isClickPhone = 2;
    },
    async secondPhone() {
      this.isClickPhone = 3;
      let params = {
        phone: this.phone
      };
      // let res = await this.$api.getSendCode(params)
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    /*完成登录 */
    async finishLogin() {
      let params = {
        phone: this.phone,
        captcha: this.captcha
      };
      let res = await this.$api.getVerifyCaptcha(params);
      if (res) {
      }
    }
  }
};
</script>
<style lang="scss" scope>
.login {
  // $size: 34px;
  .first {
    height: 100vh;
    background: red;
    position: relative;
    .btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0 10vw;
    }
  }
  .second {
    height: 100vh;
    position: relative;
    .title {
      font-size: 50px;
      padding: 20px 40px;
    }
    .hint {
      font-size: 28px;
      color: #999;
      padding: 20px 40px;
    }
    .btn {
      padding: 0 20vw;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 50%);
      background: red;
      color: #fff;
    }
  }
  .three {
  }
}
</style>
