const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use("/api", createProxyMiddleware({
    target: "http://22.11.1.1:8088",
    changeOrigin: true
  }))
}