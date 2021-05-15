import * as functions from 'firebase-functions';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/test', (req, res) => {
	res.send(process.env.DB_HOST);
});

exports.app = functions.https.onRequest(app);
