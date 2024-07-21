var url = require('url');
var params = url.parse(process.env.DATABASE_URL);
var auth = params.auth.split(':');

function localPgConfig() {
	var config = {
		user: auth[0],
		password: auth[1],
		host: params.hostname,
		port: params.port,
		database: params.pathname.split('/')[1],
		ssl: {rejectUnauthorized: false} // I WILL NEED TO FIX THIS!
	};

	return config;
}
module.exports.localPgConfig = localPgConfig;
