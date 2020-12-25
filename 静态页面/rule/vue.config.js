const webpack = require("webpack");
const path = require("path");
let { version, version_lib, openGzip, library } = require("./package.json");
module.exports = {
    publicPath: "./", // 基本路径
    outputDir: "rulecn", // 输出文件目录
    assetsDir: "static",
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // webpack配置
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        // 把px单位换算成rem单位
                        rootValue: 37.5, // // 设计稿宽度的1/10
                        selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                        propList: ['*'] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
                    })
                ]
            }
        }
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
        proxy: {
            "/api": {
                target: `http://47.100.227.125:8003`,
                // target: `http://192.168.1.210:8003/`,
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        } // 代理转发配置，用于调试环境
    }, // 第三方插件配置
    pluginOptions: {}
};