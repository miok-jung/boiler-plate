const {createProxyMiddleware} = require('http-proxy-middleware');
var sab = new SharedArrayBuffer(1024);
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};