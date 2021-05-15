import app from '../startup/express';

app.post('/email/contact', (req, res) => {
	console.log(req.body);

	res.json({
		type: 'sucess',
		message: 'alskdjlaskjads',
	});
});
