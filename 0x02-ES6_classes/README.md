# 0x02. ES6 classes  
![classes](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/817248fb77fb5c2cef3f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230728%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230728T171147Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d25f00849d17d8113f4bea813904a04af60a6d2ab4a9710dfbddaf863c711b0c)  

# Resources  
## Read or watch:  

![Classes](https://intranet.alxswe.com/rltoken/ke2dSL31JbpAUBW0qWE9WA)  
![Metaprogramming](https://intranet.alxswe.com/rltoken/6OgF5QGbYclp_cwATfq-0g)  

# Learning Objectives  

- At the end of this project, you are expected to be able to ![explain to anyone](https://intranet.alxswe.com/rltoken/HZvBl09eHoGwvN8jqlYO-g), without the help of Google:  

- How to define a Class  
- How to add methods to a class  
- Why and how to add a static method to a class  
- How to extend a class from another  
- Metaprogramming and symbols  

# Requirements  
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x  
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`  
- All your files should end with a new line  
- A `README.md` file, at the root of the folder of the project, is mandatory  
- Your code should use the `js` extension  
- Your code will be tested using `Jest` and the command `npm run test`  
- Your code will be verified against lint using ESLint  
- Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`  

# Setup  
Install NodeJS 12.11.x  
(in your home directory):  
`curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh`  
`sudo bash nodesource_setup.sh`  
`sudo apt install nodejs -y`  

`$ nodejs -v`  
`v12.11.1`  
`$ npm -v `
`6.11.3`  

# Install Jest, Babel, and ESLint  
- in your project directory:  

- Install Jest using: `npm install --save-dev jest`  
- Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint using: `npm install --save-dev eslint`

# Configuration files  
`package.json`  
Click to show/hide file contents  
`babel.config.js`  
Click to show/hide file contents  
`.eslintrc.js`  
Click to show/hide file contents  
and…  
- Don’t forget to run $ `npm install` when you have the `package.json`
