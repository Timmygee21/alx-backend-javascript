# 0x05-Node_JS_basic  

## Running JavaScript Using Node.js
This README provides a brief guide on how to use Node.js for various tasks, including running JavaScript code, working with Node.js modules, reading files, creating HTTP servers, and leveraging Express.js for more advanced routing. Additionally, it covers using ES6 syntax with Babel-node and Nodemon for faster development.

### Table of Contents  
1. Running JavaScript Using Node.js  
2. Using Node.js Modules  
3. Reading Files with a Node.js Module  
4. Accessing Command Line Arguments and Environment Variables  
5. Creating a Small HTTP Server Using Node.js  
6. Creating a Small HTTP Server Using Express.js  
7. Creating Advanced Routes with Express.js  
8. Using ES6 with Node.js and Babel-node  
9. Using Nodemon for Faster Development  


### 1. Running JavaScript Using Node.js    
Node.js allows you to execute JavaScript code outside the browser. To run a JavaScript file using Node.js, simply open your terminal and use the following command:

`node your_file.js`

### 2. Using Node.js Modules  
Node.js modules enable you to structure your code and reuse functionality. You can import modules using require:

`const fs = require('fs'); // Example: Importing the 'fs' module for file operations.`

### 3. Reading Files with a Node.js Module  
Node.js provides modules like fs for file operations. Here's how you can read a file using fs:

```
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

### 4. Accessing Command Line Arguments and Environment Variables  
You can access command line arguments and environment variables using the process object:

```
// Access command line arguments
const arg1 = process.argv[2];

// Access environment variables
const envVar = process.env.MY_ENV_VARIABLE;
```

### 5. Creating a Small HTTP Server Using Node.js  
You can create a basic HTTP server using Node.js's built-in http module. Here's a simple example:

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
```

### 6. Creating a Small HTTP Server Using Express.js  
Express.js is a popular framework for building web applications in Node.js. To create an HTTP server with Express.js, first install Express:

`npm install express`  
Then, create an Express app:

```
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});
```

### 7. Creating Advanced Routes with Express.js  
Express.js allows you to create advanced routes using route parameters, middleware, and more. Here's an example of a route with a parameter:

```
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  // Fetch user data based on 'userId'
  res.send(`User ID: ${userId}`);
});
```

### 8. Using ES6 with Node.js and Babel-node  
You can use ES6 syntax in Node.js using Babel. First, install the necessary packages:

`npm install @babel/core @babel/node @babel/preset-env`  
Then, create a .babelrc file:

```
{
  "presets": ["@babel/preset-env"]
}
```

Now you can use ES6 features by running your script with babel-node:  

`npx babel-node your_es6_script.js`  

### 9. Using Nodemon for Faster Development  
Nodemon is a tool that automatically restarts your Node.js application when code changes are detected. Install it globally:

`npm install -g nodemon`  
Then, run your Node.js application using Nodemon:

`nodemon your_file.js`

With Nodemon, you don't need to manually restart your server during development. It will watch all of its files and automatically restart when any changes are detected
