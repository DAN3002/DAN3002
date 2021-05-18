import app from '../startup/express';
import { Contacts } from '../models';
import { processEmailBody } from './libs/processEmailBody';
import Email from './Email';

app.post('/email/contact', (req, res) => {
	const { body } = req;

	Contacts.insert(body);

	// Send email
	const { name, email, subject, message } = body;
	const mailBody = processEmailBody(name, message);
	const to = `${ process.env.EMAIL_CC }, ${ email }`;

	Email.send(to, subject, mailBody);
	res.sendStatus(200);
});
