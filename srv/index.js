var bodyParser = require('body-parser');
var fs = require("fs");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var indexPage = fs.readFileSync(__dirname + "/../webpage/index.html", "utf8");

module.exports = function(app) {
	app.get('/', urlencodedParser, function(req, res) {
		res.send(indexPage);
	});
}