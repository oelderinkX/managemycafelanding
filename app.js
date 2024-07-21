var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser')
var port = process.env.PORT || 80;

app.use(favicon(__dirname + '/images/favicon.ico'));

app.disable('etag');

app.use(cookieParser())
app.use('/images', express.static('images'));
app.use('/script', express.static('script'));
app.use('/webpage', express.static('webpage'));
app.use('/javascript', express.static('javascript'));

app.listen(port, function () {
	console.log('ManageMyCafe Landing page is ready!');
});

require('./srv/index.js')(app);

