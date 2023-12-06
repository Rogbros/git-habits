import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import twig from 'twig';
import path from 'path';

import router from './routes/habitRoutes'; 

dotenv.config();

const app = express();

app.set('views', path.join(__dirname, './templates'));
app.set('view engine', 'twig');

app.use(cors());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json());

app.use('/', router)

module.exports = app;