const webpack = require("webpack");
const path = require("path");
// const UglifyPlugin = require('uglifyjs-webpack-plugin');
let { version, version_lib, openGzip, library } = require("./package.json");


module.exports = {
  publicPath: "./", // 基本路径
  outputDir: "dist", // 输出文件目录
  assetsDir: "static",

  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true);
    // 别名配置
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src"))
      .set("assets", path.resolve(__dirname, "./src/assets"))
      .set("@network", path.resolve(__dirname, "./src/network"))
      .set("components", path.resolve(__dirname, "./src/components"))
      .set("views", path.resolve(__dirname, "./src/views"))
      .set("@store", path.resolve(__dirname, "./src/store"))
      .set("jquery$", "jquery/dist/jquery.min.js");
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      config.mode = "production";
      Object.assign(config, {
        output: {
          ...config.output,
          filename: `static/js/[name].[chunkhash].${version}.js`,
          chunkFilename: `static/js/[name].[chunkhash].${version}.js`
        },
        // optimization,
        plugins: [
          ...config.plugins
        ]
      });
      if (openGzip) {
        config.plugins = [
          ...config.plugins,
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ];
      }
    } else {
      // 为开发环境修改配置...
      config.mode = "development";
    }
    Object.assign(config, {
      plugins: [
        ...config.plugins,
        new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery",
          "windows.jQuery": "jquery"
        })
      ]
    });
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {
    iconPaths: {
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico"
    }
  }, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "0.0.0.0", // 允许外部ip访问
    port: 8080, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    // proxy: {
    //   "/api": {
    //     // target: `http://106.14.125.210:8003/`,
    //      target: `http://192.168.1.60/`,
    //     changeOrigin: true, // 允许websockets跨域
    //     ws: true,
    //     // 路径重写
    //     pathRewrite: {
    //       "^/api": ''
    //     }http://192.168.1.6:8080
    //   }
    // }, // 代理转发配置，用于调试环境
    proxy: {
      "/api": {
        target: `http://192.168.1.60`,
        changeOrigin: true, // 允许websockets跨域
        ws: true,
        // 路径重写
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  }, // 第三方插件配置
  pluginOptions: {}
};
