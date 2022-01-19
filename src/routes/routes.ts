import express, { Request, Response } from 'express';
import controllers from '../controllers/repo-controllers';
import requests from '../controllers/repo-requests';
import { AxiosResponse, AxiosRequestConfig } from 'axios';


const router = express.Router();

router.get('/repos', async (req: Request, res: Response) => {
  try {

    const repositories = await controllers.getRepos(
      req.query.user,
      requests.getRepositoriesRequest
      );

    return res.status(200).send(repositories);

  } catch(e: any) {

    let statusCode: number = e.response.status;
    let statusMessage: string = `error - try again later (${e.message})`

    if (e.response.statusText === 'Not Found') {
      statusMessage = `username not found - (${e.message})`
    } else if (e.response.status >= 500) {
      statusMessage = `server error - try again later  - (${e.message})`;
    } else if (e.response.status === 401) {
      statusMessage = `unauthorized - ensure personal key is up to date  - (${e.message})`
    }

    return res.status(statusCode).send(statusMessage);

  }
});

export default router;