import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config()

export const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', router);
