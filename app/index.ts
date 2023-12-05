import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

module.exports = app;