var config = {
		server:
		{
			keyFile: '<your_name_for_your_key>.pem',
			certFile: '<your_name_for_your_cert>.pem',
			port: 9092
		},
		daemon:
		{
			host: 'localhost',
			port: 9091
		}
}
module.exports = config;