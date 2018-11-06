const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

require('./routes/route.js')(app);

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
	console.log('Server running on port ' + app.get('port'));
})