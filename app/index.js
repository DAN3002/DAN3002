import * as functions from 'firebase-functions';

import './startup';

import app from './startup/intiExpress';

app.get('/test', (req, res) => {
	res.send('lkjklj');
});

exports.app = functions.https.onRequest(app);
