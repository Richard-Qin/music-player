let _import = index => {
  return import(/* webpackChunkName: 'demo' */ "@/pages/views/" + index);
};
export default [
  {
    path: "/",
    name: "Nav",
    redirect: "/find",
    component() {
      return _import("nav/index");
    },
    meta: {
      title: "导航"
    },
    children: [
      {
        path: "/find",
        name: "Discover",
        component() {
          return _import("discover/index");
        },
        meta: {
          title: "发现"
        }
      },
      {
        path: "/home",
        name: "Home",
        component() {
          return _import("home/index");
        },
        meta: {
          title: "我的"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component() {
      return _import("login/index");
    },
    meta: {
      title: "我的"
    }
  }
];
