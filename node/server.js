var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var cache = {};

function send404(res) {
	res.writeHead(404, {'content-Type' : 'text/plain'});
	res.write('error 404: resource not found.');
	res.end();
}

function sendFile(res, filePath, fileContents) {
	res.writeHead(200, {'content-Type' : mime.lookup(path.basename(filePath)) });
	res.end(fileContents);
}

function serverStatic(res, cache, absPath) {
	if ( cache[absPath] ) { 
		sendFile ( res, absPath, cache[absPath] );
	} else {
		fs.exists(absPath, function(exists) {
			if(exists){
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(res);
					} else {
						cache[absPath] = data;
						sendFile(res, absPath, data);
					}
				});
			} else {
				send404(res);
			}
		});
	}
}

var server = http.createServer(onRequest).listen(3000, function() {
	console.log("server listening on port 3000.");
});

function onRequest(req, res) {
	var filePath = false;
	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'public' + req.url;
	}

	var absPath = './' + filePath;
	serverStatic(res, cache, absPath);
}