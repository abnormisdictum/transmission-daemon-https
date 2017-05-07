var https = require('https');
var proxy = require('http-proxy');
var config = require('./config.js');
var fs = require('fs');

proxy.createProxyServer({
	ssl:
	{
		key: fs.readFileSync(config.server.keyFile),
		cert: fs.readFileSync(config.server.certFile)
	},
	target: {
		host: config.daemon.host,
		port: config.daemon.port
		},
	secure :false
}).listen(config.server.port);
console.log('Proxy is up');
