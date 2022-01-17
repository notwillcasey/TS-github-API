import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Repo {
  name: string,
  description: string,
  url: string
};

const getRepos = async function (req: Request, res: Response) {

  const user: any = req.query.user;
  const url: string = `https://api.github.com/users/${user}/repos`;
  const options: object = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  try {
    const result: AxiosResponse = await axios.get(url, options);
    const repositories: [Repo] = result.data.map((rep: any) => {
      const repository: Repo = {
        name: rep.name,
        description: rep.description,
        url: rep.url
      };
      return repository;
    })
    return res.status(200).send(repositories);

  } catch (e: any) {
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

};

export default { getRepos };