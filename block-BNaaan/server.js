const http = require('http');

let server = http.createServer(handleRequests);

function handleRequests(req, res) {
  console.log(req.method, req.url);

  res.writeHead(201, { 'Content-Type': `text/html` });
  res.end('<h2>Welcome</h2>');
}

server.listen(4444, 'localhost', () => {
  console.log(`Server listening on 4444 port!`);
});