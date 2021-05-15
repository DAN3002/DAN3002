import app from '../startup/express';
import { Contacts } from '../models';

app.post('/email/contact', (req, res) => {
	const { body } = req;
	Contacts.insert(body);

	res.sendStatus(200);
});
