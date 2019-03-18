console.log('asu');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.get('/status', (req, res) => {
	console.log('as2');
	res.send({
		message: 'hello world'
	});
});
app.post('/', function(req, res) {
	var username = req.body.username;
	var html = 'Hello:' + username;
	res.send(html);
	console.log(html);
});
app.listen(process.env.PORT || 3000);
