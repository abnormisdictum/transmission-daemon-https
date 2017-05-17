var https = require('https');
var proxy = require('http-proxy');
var config = require('./config.js');
var fs = require('fs');

var daemon_host = config.daemon.host || 'localhost',
	daemon_port = config.daemon.port || 9091,
	server_host = config.server.bind || '0.0.0.0',
	server_port = config.server.port || 9092;

proxy.createProxyServer({
	ssl:
	{
		key: fs.readFileSync(config.server.keyFile),
		cert: fs.readFileSync(config.server.certFile)
	},
	target: {
		host: daemon_host,
		port: daemon_port
		},
	secure: false,
	xfwd: true,
	ws:true
}).listen(server_port, server_host);
console.log('Proxy is up');
