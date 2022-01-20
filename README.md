# typescript-github-api

A TypeScript/Node.js API for requesting data from the GitHub API.

## API Endpoint Reference

### GET /repos

QUERY PARAMS :
> accepts usernames for GitHub
```
user: (string)
```
RESPONSE FORMAT :
> returns an array of objects containing data for each open repository for the provided user
```
[
    {
      name: (string)
      description: (string)
      url: (string)
    },
    ...
]
```

<!-- ### GET /pr/commits

QUERY PARAMS :
> url must follow below format where USER is the github username and REPO is the github repository title
```
url: https://github.com/USER/REPO
```
RESPONSE FORMAT :
> returns an array of objects containing data for each open pull request in the provided repository
```
[
    {
        pull_number: (integer)
        pull_title: (string)
        number_of_commits: (integer)
    },
    ...
]
``` -->

  ## Installation

- Clone code to your local machine using the method of your choice (https, ssh, or GitHub CLI)
- On your local machine, create a new file named '.env' to the repository and add the required environment variables (see sample.env or below example for reference). GitHub personal access tokens are required to access data from the github API with fewer restrictions. [Creating Personal Access Tokens.](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

```
PORT=(personal choice of port number)
TOKEN=(github personal access token)
```
In the root folder for the repository on your local macine, exceute the following to start the Node.js server:

- 'npm install' to install dependencies
- 'npm run build' to compile typescript into javascript
- 'npm start' to start the server

Execute the following to start the Node.js server in development:
- 'npm run dev'

Execute the following to run the test suite:
- 'npm run test-unit' to run unit tests
- 'npm run test-int' to run integration testiong (this requires GitHub token in .env to properly function
