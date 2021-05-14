import * as functions from 'firebase-functions';
import express from 'express';

const app = express();

app.get('/test', (req, res) => {
	res.send('lkasdj');
});

exports.app = functions.https.onRequest(app);
