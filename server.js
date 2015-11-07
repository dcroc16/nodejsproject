var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function( req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World \n');
}).listen('1337', '127.0.0.1');
console.log('server listening on http://127.0.0.1:1337');