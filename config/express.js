const express = require('express');
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';

import routes from '../routes/index';
import jwt from './jwt';
const app = express();

// parse body params and attache them to req.body
app.use(json());
app.use(urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount all routes on /api path
app.use('/api', jwt(), routes);

export default app;
