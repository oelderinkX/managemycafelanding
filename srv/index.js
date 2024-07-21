var pg = require('pg');
var bodyParser = require('body-parser');
var fs = require("fs");
var db = require('../script/db.js');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var pool = new pg.Pool(db.localPgConfig());

var loginPage = fs.readFileSync(__dirname + "/../webpage/index.html", "utf8");

module.exports = function(app) {
	app.get('/', urlencodedParser, function(req, res) {
		res.send(loginPage);
	});
}