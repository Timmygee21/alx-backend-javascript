# 0x06-unittests_in_js  
### Testing with Mocha and Related Concepts  
This README provides guidance on writing tests with Mocha, a popular JavaScript testing framework, and covers several testing-related topics, including assertion libraries, handling long test suites, using spies and stubs, hooks, unit testing with async functions, and writing integration tests with a small Node.js server.

### Table of Contents  
1. Using Mocha to Write a Test Suite  
2. Using Different Assertion Libraries   
3. Presenting Long Test Suites  
4. Using Spies  
5. Using Stubs  
6. Understanding Hooks  
7. Unit Testing with Async Functions  
8. Writing Integration Tests with a Small Node Server  



### 1. Using Mocha to Write a Test Suite  
Mocha is a versatile testing framework for JavaScript. Use it to structure your tests with `describe` and `it` blocks.

Example:

```
const assert = require('assert');

describe('Math Operations', () => {
  it('should add two numbers', () => {
    assert.equal(1 + 1, 2);
  });

  it('should subtract two numbers', () => {
    assert.equal(3 - 1, 2);
  });
});
```

### 2. Using Different Assertion Libraries  
You can choose between different assertion libraries for more expressive tests. Node.js provides an `assert` module, and Chai is a popular third-party library.

Node.js `assert`:
```
const assert = require('assert');
assert.strictEqual(actual, expected, 'Optional message');
```

Chai:
```
const { expect, should } = require('chai');
expect(actual).to.equal(expected);
should().equal(expected);
```

### 3. Presenting Long Test Suites  
For long test suites, control the output format and verbosity using Mocha's built-in reporter options (`dot`, `spec`, or `list`).

Example:

`mocha testfile.js --reporter dot`

### 4. Using Spies  
Spies record function calls and arguments, facilitating testing. Libraries like Sinon.js provide spying functionality.

Example with Sinon.js:

```
const sinon = require('sinon');
const myFunction = sinon.spy();
myFunction(42);
sinon.assert.calledOnce(myFunction);
sinon.assert.calledWithExactly(myFunction, 42);
```

### 5. Using Stubs  
Stubs replace functions with predefined behavior for testing purposes.

Example with Sinon.js:

```
const sinon = require('sinon');
const fs = require('fs');
const readFileStub = sinon.stub(fs, 'readFile').callsFake((path, callback) => {
  callback(null, 'File content');
});
```

### 6. Understanding Hooks  
Mocha provides hooks (`before`, `after`, `beforeEach`, `afterEach`) for setup and teardown code.

Example:

```
before(() => {
  // Runs once before all tests
});

after(() => {
  // Runs once after all tests
});

beforeEach(() => {
  // Runs before each test
});

afterEach(() => {
  // Runs after each test
});
```

### 7. Unit Testing with Async Functions  
For async code, use Mocha's `done` callback or return Promises with `async/await`.

Example with `done`:

```
it('should resolve a promise', (done) => {
  someAsyncFunction().then(() => {
    done();
  }).catch(done);
});
```

Example with `async/await`:

```
it('should resolve a promise', async () => {
  await someAsyncFunction();
});
```

### 8. Writing Integration Tests with a Small Node Server  
For integration tests involving a Node.js server, use libraries like `supertest` to make HTTP requests and validate responses.

Example with Supertest:

```
const request = require('supertest');
const expressApp = require('./your-express-app');

describe('Integration Tests', () => {
  it('should return a 200 status code', (done) => {
    request(expressApp)
      .get('/')
      .expect(200, done);
  });

  it('should return JSON data', (done) => {
    request(expressApp)
      .get('/data')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
```
