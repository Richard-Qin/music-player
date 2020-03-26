import $http from "./http.js";

import * as findMusic from "./find";

let $api = {};
// 前台
for (let key in findMusic) {
  $api[key] = findMusic[key];
}

export default $api;

/**
 * 发送验证码
 */
export const getSendCode = params => {
  return $http.get(`/captcha/sent`, params);
};

/**
 * 验证验证码
 */
export const getVerifyCaptcha = params => {
  return $http.get(`/captcha/sent`, params);
};

export const getPersonalized = ({ limit }) => {
  let params = {
    limit
  };
  return $http.post(`/personalized`, params);
};

/**
 * 发现页
 * 头部轮播图
 */

// export const getBanner = params => {
//   return $http.get(`/banner`, params);
// };
