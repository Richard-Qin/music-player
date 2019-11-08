let path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
let isProduction = process.env.NODE_ENV === "production";
module.exports = {
  publicPath: "./",
  outputDir: "../docker/static/sharing-merchant",
  assetsDir: "./statics",
  indexPath: "./index.html",
  productionSourceMap: !isProduction,
  chainWebpack: config => {
    /* 移除 prefetch  preload */
    config.plugins.delete("prefetch");
    config.plugins.delete("preload");
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@utils", resolve("src/utils/index.js"));
  },
  devServer: {
    host: "0.0.0.0",
    open: true,
    proxy: "http://140.143.128.100:3000"
  }
};