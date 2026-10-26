const bodyParser = require('body-parser');
const fs = require("fs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

const indexPage = fs.readFileSync(__dirname + "/../webpage/index.html", "utf8");
const mobileIndexPage = fs.readFileSync(__dirname + "/../webpage/mobile_index.html", "utf8");

module.exports = function(app) {
	app.get('/', urlencodedParser, function(req, res) {
		if (req.useragent.isMobile) {
        	res.send(mobileIndexPage);
    	} else {
			res.send(indexPage);
		}
	});

	app.get('*', urlencodedParser, function(req, res) {
		if (req.useragent.isMobile) {
        	res.send(mobileIndexPage);
    	} else {
			res.send(indexPage);
		}
	});
}