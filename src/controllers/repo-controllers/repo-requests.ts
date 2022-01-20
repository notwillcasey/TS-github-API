import axios from 'axios';

const getRepositoriesRequest = function (username: string) {
  const url: string = `https://api.github.com/users/${username}/repos`;
  const options: object = {
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };

  return axios.get(url, options);
}

export default { getRepositoriesRequest };