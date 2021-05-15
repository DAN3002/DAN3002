import * as functions from 'firebase-functions';

import './startup';
import './email';

import app from './startup/express';

exports.app = functions.https.onRequest(app);
