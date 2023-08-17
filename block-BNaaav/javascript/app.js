var http = require("http");
var fs = require('fs')
var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    console.log(req.method, req.url);
    if(req.method === 'GET' && req.url ==='/index') {
     res.setHeader("Content-Type", "text/html");
     fs.createReadStream('./index.html').pipe(res);
     
    }else if(req.method === 'GET' && req.url ==='/about'){
        res.setHeader("Content-Type", "text/html");
        fs.createReadStream('./about.html').pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
}

server.listen(2355, () => {
  console.log("server litening on port 2355");
});