const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    "/reverser",
    createProxyMiddleware({
	    target: "https://backend22.azurewebsites.net:5000",
      changeOrigin: true
    })
  );

  app.use(
    "/summation",
    createProxyMiddleware({
      target: "https://backend22.azurewebsites.net:5000",
      changeOrigin: true
    })
  );
}
