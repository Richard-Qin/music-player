import $http from "./http.js";

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
