const path = require('path');

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/views/index.html'));
	});

	app.get('*', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/views/404.html'));
	});
};