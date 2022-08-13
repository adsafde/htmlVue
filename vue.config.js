const {defineConfig} = require('@vue/cli-service')
// import {defineConfig} from "@vue/cli-service";
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.VUE_APP_STATIC || '',
    devServer: {
        proxy: {
            '/api': { //http（代理名称）
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        },
    }
})
