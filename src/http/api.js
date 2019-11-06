import $http from "./http.js";

// const BASIC_URL = `/app/h5seller`

/**
 * 商家分享h5接口
 */

/**
 * 商家详情-基本信息
 */

export const getSendCode = params => {
  return $http.get(`/captcha/sent`, params);
};
