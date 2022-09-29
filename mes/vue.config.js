module.exports = {
  devServer: {
    proxy: {
      '/api': {// 匹配所有以 '/api1'开头的请求路径
        target: 'http://localhost:5000',// 代理目标的基础路径
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    },
    host: '127.0.0.1',
    port: 8080,
    client: {
      webSocketURL: 'ws://192.168.0.103:8080/ws',
    }
  }
}
