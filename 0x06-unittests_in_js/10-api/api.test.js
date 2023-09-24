const request = require('request');
const expect = require('chai').expect;

describe('Index page', function () {
  const url = 'http://localhost:7865/';

  it('should return status code 200', function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct content', function (done) {
    request(url, function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function () {
  it('should return status code 200 for correct URL', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct content for correct URL', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 for incorrect URL', function (done) {
    request('http://localhost:7865/cart/kim', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available_payments page', function () {
  it('should return status code 200 for correct URL', function (done) {
    request('http://localhost:7865/available_payments', function (
      error,
      response,
      body
    ) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct JSON body for correct URL', function (done) {
    request('http://localhost:7865/available_payments', function (
      error,
      response,
      body
    ) {
      expect(response.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe.skip('Login', function () {
  it('should return status code 200 for a properly sent request', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE',
      },
    };

    request.post(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a welcome message for a properly sent request', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE',
      },
    };

    request.post(options, function (error, response, body) {
      expect(body).to.contain('Welcome JOE');
      done();
    });
  });

  it('should return status code 404 for a request with incorrect parameters', function (done) {
    const options = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        usame: 'JOE', // Typo should be "userName"
      },
    };

    request.post(options, function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

