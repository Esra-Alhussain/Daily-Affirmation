const cors_proxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeaders: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, () => {
  console.log('CORS Anywhere is running on ' + host + ':' + port);
});
