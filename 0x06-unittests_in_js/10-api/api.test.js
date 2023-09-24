const expect = require('chai').expect;
const axios = require('axios');

describe('Index page', function () {
  const url = 'http://localhost:7865/';

  it('should return status code 200', async function () {
    const response = await axios.get(url);
    expect(response.status).to.equal(200);
  });

  it('should return the correct content', async function () {
    const response = await axios.get(url);
    expect(response.data).to.equal('Welcome to the payment system');
  });

  // ... (similar modifications for other test cases)
});

