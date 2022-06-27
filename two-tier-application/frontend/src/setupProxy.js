const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    "/reverser",
    createProxyMiddleware({
	    target: "https://backend-service.yellowground-0d9dacb3.canadacentral.azurecontainerapps.io/",
      changeOrigin: true
    })
  );

  app.use(
    "/summation",
    createProxyMiddleware({
      target: "https://backend-service.yellowground-0d9dacb3.canadacentral.azurecontainerapps.io/",
      changeOrigin: true
    })
  );
}
