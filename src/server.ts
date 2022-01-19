import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes';

dotenv.config()

export const initApp = function() {
  const app: Express = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());

  app.use('/', router);

  return app;
};

export const start = function() {
  const app = initApp();

  const PORT: any = process.env.PORT;

  try {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
    });
  } catch(e) {
    console.log(e);
  }



};

start();