js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.

![node.js](https://private-user-images.githubusercontent.com/110098940/261981433-9d31b74e-6e02-400d-a103-c3fd25f5f248.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQ0OTE0NDEsIm5iZiI6MTcxNDQ5MTE0MSwicGF0aCI6Ii8xMTAwOTg5NDAvMjYxOTgxNDMzLTlkMzFiNzRlLTZlMDItNDAwZC1hMTAzLWMzZmQyNWY1ZjI0OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNDMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDQzMFQxNTMyMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jZDQzZjk2YWU3ODNkMzk2NTJhNjhhYmM1OTJhYjI5OTFjNDMzNjQ1YjFlYWNkZDcyM2M4MGJkN2EwNjVjZTRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.kYddw0wyAy3q1Wvajhe5K7xrtfA6PwIX-fwa-UDlnE4)

##About  
- Using Node modules  
- Using Node JS modules to read files  
- Use process object to access command line arguments and the environment  
- Creating HTTP servers with Node JS and Express JS  
- Using ES6 with Node JS with Babel-node  
- Using Nodemon  

##Tasks  
0. Function displayMessage that print in stdout a string argument.  

	- File: 0-console.js  

1. Scripts that prompts for user input and prints modified output that include the given input.  

	- File: 1-stdin.js  

2. Function countStudents that reads database.csv synchronously and prints out the data.  

	- File: 2-read_file.js  

3. Function countStudents that reads database.csv asynchronously and prints out the data.  

	- 3-read_file_async.js  

4. Minimal HTTP server using Nodejs http module.  

	- Routes:  
		- GET /: home page.  
	- File: 4-http.js 

5. Minimal HTTP server using Nodejs http module.  
	- Routes:  
		- GET /: home page  
		- GET /students: returns list of students in every major.  
	- File: 5-http.js  

6. Minimal Express HTTP server.  

	- Routes:  
		- GET /: home page.  
	- File: 6-http_express.js  

7. Minimal Express HTTP server.  

	- Routes:  
		- GET /: home page.  
		- GET /students: returns list of students in every major.  
	- File: 7-http_express.js  

8. Minimal Express server.  

	- Routes:  
		- GET /: home page.  
		- GET /students: returns list of students in every major.  
		- GET /students/:major: returns list of students in given major. (major options: CS and SWE).  
	- Files:  
		- utils.js: retrieves data from database.csv.  
		- AppController.js: / route controller.  
		- StudentsController.js: /students and /students/:major routes controller.  
		- index.js: router module.  
		- server.js: server entry point.  
