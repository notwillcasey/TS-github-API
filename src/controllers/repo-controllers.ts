import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Repo {
  name: string,
  description: string,
  url: string
}

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

    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }

  }

export default { getRepos }