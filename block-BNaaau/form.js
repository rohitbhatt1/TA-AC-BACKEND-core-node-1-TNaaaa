// Create a basic server using http's createServer
// - listen for request on port 5000
// - console request and response object
// - do a request using browser on `localhost:5000`
// - check out console for request and response object

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    console.log(req);
    console.log(res);
    res.end('Welcome');
}

server.listen(5000, () => {
    console.log('server listening on port 5000');
});


// create a node server 
//   - add listener on port 5100
//   - respond with 'My first server in NodeJS' using response object

var http1 = require('http');

var server1 = http1.createServer(handleRequest1);

function handleRequest1(req,res){
    res.end('My first server in NodeJS');
}

server1.listen(5100, () => {
    console.log('server1 listening on port 5100');
});


// write code to create a node server 
//   - add listener on port 5555
//   - console request headers
//   - respond with content of user-agent from request headers.

var http2 = require('http');

var server2 = http2.createServer(handleRequest2);

function handleRequest2(req,res){
    console.log(req.headers);
    res.end(req.headers['user-agent']);
}

server2.listen(5555, () => {
    console.log('server2 listening on port 5555');
});

// write code to create a node server 
//   - add listener on port 5566
//   - console request url and request method
//   - return a text response with requested url and method

var http3 = require('http');

var server3 = http3.createServer(handleRequest3);

function handleRequest3(req,res){
    console.log(req.method,req.url);
    res.end(req.method + req.url);
}

server3.listen(5566,() => {
    console.log('server3 listening on port 5566');
});


// write code to create a node server 
// - add listener on port 7000
// - also add a callback function to listener with a console `server listening on port 7000`
// - return entire request headers in response.

var http4 = require('http');

var server4 = http4.createServer(handleRequest4);

function handleRequest4(req,res){
    res.end(JSON.stringify(req.headers));
}

server4.listen(7000,() => {
    console.log('server4 listening on port 7000');
});


// create a server
//   - add a listener on port 3333
//   - set status code 202 in response using `res.statusCode`.

var http5 = require('http');

var server5 = http5.createServer(handleRequest5);

function handleRequest5(req,res){
    res.statusCode = 202;
    res.end('added the status code 202')
}

server5.listen(3333, () => {
    console.log('server5 listening on port 3333');
});


// create a server 
//   - add a listener on port 8000
//   - set appropriate header for html response using `res.setHeader`
//   - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

var http6 = require('http');

var server6 = http6.createServer(handleRequest6);

function handleRequest6(req,res){
    res.setHeader('Content-type','text/html');
    res.end('<h3>Welcome to altcampus</h3>');
}

server6.listen(8000, () => {
    console.log('server6 listening on port 8000');
});

// Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.

var http7 = require('http');

var server7 = http7.createServer(handleRequest7);

function handleRequest7(req,res){
    res.writeHead(201, {'Content-type': 'text/html'})
    res.end('<h3>Welcome to altcampus</h3>');
}

server7.listen(8000, () => {
    console.log('server7 listening on port 8000');
});


// create a basic node server
//   - add a listener at port 8888
//   - add appropriate header for json response
//   - send json response({success: true, message: 'Welcome to Nodejs'})

var http8 = require('http');

var server8 = http8.createServer(handleRequest8);

function handleRequest8(req,res){
    res.writeHead(201, {'Content-type': 'application/json'});
    res.end(JSON.stringify({
        success: true,
        message: 'Welcome to Nodejs'
    }));
}

server8.listen(8888, () => {
    console.log('server8 listening on port 8888');
});

// create a server
// - add listener on port 5050
// - use postman to do a POST request on index route
// - console to check request method
// - send HTML response i.e. `<h2>posted for first time</h2>`

var http9 = require('http');

var server9 = http9.createServer(handleRequest9);

function handleRequest9(req,res){
    console.log(req.method);
    res.setHeader('Content-type','text/html');
    res.end('<h2>posted for first time</h2>')
}

server9.listen(5050, () => {
    console.log('server9 listening on port 5050');
});


// create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.

var http10 = require(http);

var server10 = http10.createServer(handleRequest10);

function handleRequest10(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type', 'text/plain');
        res.end('Ravi');
    }
    else if(req.method === 'GET' && req.url === '/about'){
        res.setHeader('Content-type', 'text/html');
        res.end('<h2> Ravi </h2>');
    }
    else{
        res.statusCode = 404;
        res.end('Page not Found');
    }
}

server10.listen(2345, () => {
    console.log('server10 listening on port 2345');
});


// Handle 2 requests on same route with different method
// 1. GET on '/users' route where return a simple HTML form with name and email field
// 2. POST on '/users' route with a message 'Posted for the second time'.

var http11 = require('http');

var fs = require('fs');

var server11 = http11.createServer(handleRequest11);

function handleRequest11(req,res){
    if(req.method === 'GET' && req.url === '/users'){
        res.setHeader('Content-type', 'text/html');
        fs.createReadStream('./form.html').pipe(res);
    }
    if(req.method === 'POST' && req.url === './users'){
        res.end('Posted for the second time');
    }
}

server11.listen(2345, () => {
    console.log('server11 listening on port 2345');
});


// create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

var http12 = require(http);
var url = require('url');
var fs2 = require('fs');
var server12 = http12.createServer(handleRequest12)

function handleRequest12(req,res){
    var parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl.pathname, req.url);
    console.log(parsedUrl);
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify (parsedUrl.query))
}

server12.listen(2345, () => {
    console.log('server12 listening on port 2345');
})