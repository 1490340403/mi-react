//const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
      target: 'http://mall-pre.springboot.cn',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "/api": ""
      }
    }))
}
//"/api":""      "^/api": "/"  请求地址 为 '/api'