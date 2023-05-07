const http = require('http');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  console.log(req.method, req.url, req.headers);
}

server.listen(3000, 'localhost', () => {
  console.log('Server created at 3000 port!');
});