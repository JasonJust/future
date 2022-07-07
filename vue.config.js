const { defineConfig } = require('@vue/cli-service')
const profile = require('./profile')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: '8080',
    https: false,
    open: true, // 设置代理proxy
    proxy: {
      '/node': {
        target: profile.baseURL,
        changeOrigin: true // 表示是否跨域
      }
    }
  }
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  // }
})
