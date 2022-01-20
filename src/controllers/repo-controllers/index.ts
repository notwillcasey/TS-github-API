import { AxiosResponse } from 'axios';
import { Repo } from './repo.interface';

const getRepos = async function (user: any, getRepositories: Function) {

  try {
    const result: AxiosResponse = await getRepositories(user);

    const repositories: Repo[] = result.data.map((rep: any) => {
      const repository: Repo = {
        name: rep.name,
        description: rep.description,
        url: rep.url
      };
      return repository;
    })

    return repositories;

  } catch (e: any) {

    return Promise.reject(e);

  }

};

export default { getRepos };