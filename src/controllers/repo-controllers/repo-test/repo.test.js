const controllers = require('../index');
const mockData = require('./mockRepositoryResponse.json');

describe('REPOS CONTROLLERS UNIT TESTING', () => {

  const getRepositories = function(username) {
    return mockData;
  }

  it('should transform repository data to match interface', async () => {

    const response = await controllers.default.getRepos('test', getRepositories)

    expect(response.length).toBe(3);
    expect(response[0]).toHaveProperty('name');
    expect(response[0]).toHaveProperty('description');
    expect(response[0]).toHaveProperty('url');

  })

})