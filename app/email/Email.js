import nodemailer from 'nodemailer';

class Email {
	constructor() {
		this.transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
	}

	send(to, subject, text) {
		const mailOptions = {
			from: process.env.EMAIL_USER,
			to,
			subject,
			text,
		};
		return this.transporter.sendMail(mailOptions);
	}
}

export default new Email();
