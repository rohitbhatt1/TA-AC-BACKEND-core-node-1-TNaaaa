const http = require('http');
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
  res.end('Welcome to Our Website!');
}

server.listen(4000, 'localhost', () => {
  console.log('Server Listning to Port 4000!');
});