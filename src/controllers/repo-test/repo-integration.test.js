const { app } = require('../../server');
const supertest = require('supertest');
const request = supertest(app);

describe('REPOS CONTROLLERS INTEGRATION TESTING', () => {

  it('should successfully return data from GET request', async () => {

    const response = await request.get('/repos?user=notwillcasey');

    expect(response.status).toBe(200);

  })

})