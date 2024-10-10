const outputDir = process.env.NODE_ENV == "development" ? "test" : "dist";
const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  publicPath: "./", //在打包时添加这段代码，处理静态资源找不到问题
  transpileDependencies: true,
  outputDir: outputDir, // 新增配置
  devServer: {
    // 配置 start
    client: {
      overlay: false,
    },
    // 配置 end
  },
  configureWebpack:{
    resolve:{
      alias:{
        "@": path.resolve(__dirname, "./src"),
        "@api": path.resolve(__dirname, "./src/api"),

      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/scss/index.scss";`,
      },
    },
  },
});
