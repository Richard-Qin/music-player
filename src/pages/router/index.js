let _import = index => {
  return import(/* webpackChunkName: 'demo' */ "@/pages/views/" + index);
};
export default [
  {
    path: "/",
    name: "Discover",
    component() {
      return _import("discover/index");
    },
    meta: {
      title: "商家分享"
    }
  }
];
