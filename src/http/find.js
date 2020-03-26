import $http from "./http.js";

export const getPlayList = ({ limit, order }) => {
  let params = {
    limit,
    order
  };
  return $http.post(`/top/playlist`, params);
};

/**
 * 发现页
 * 推荐歌单详情
 */
export const getRecommendDetail = ({ id, s }) => {
  let params = {
    id,
    s
  };
  return $http.post(`/playlist/detail`, params);
};

/**
 * 发现页
 * 头部轮播图
 */

export const getBanner = params => {
  return $http.get(`/banner`, params);
};
